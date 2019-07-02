/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import React, { Component } from 'react';
import { ListItem, ListItemText, withStyles } from '@material-ui/core';
import axios from 'axios';
import { githubUser } from '../constants';

const styles = {
  a: {
    textDecoration: 'none',
    color: 'gray'
  },
  event: {
    fontSize: 14
  },
  commit: {
    fontSize: 12
  },
  created: {
    fontSize: 10
  }
};

class Events extends Component {
  state = {
    activities: []
  };

  componentDidMount() {
    axios.get(`https://api.github.com/users/${githubUser}/events`).then(r => {
      this.setState({ activities: r.data });
    });
  }

  getEventText = event => {
    switch (event) {
      case 'PushEvent':
        return 'Pushed in ';
      case 'CreateEvent':
        return 'Created ';
      default:
        return '';
    }
  };

  allReplace = retStr => {
    const obj = { 'api.': '', 'repos/': '' };

    for (const x in obj) {
      retStr = retStr.replace(new RegExp(x, 'g'), obj[x]);
    }

    return retStr;
  };

  render() {
    const { activities } = this.state;
    const { classes } = this.props;

    const activityList = activities.map(activity => {
      const { payload, repo, type, id, created_at } = activity;

      return (
        <ListItem alignItems="flex-start" key={id}>
          <ListItemText
            primary={
              <span className={classes.event}>
                {this.getEventText(type)}

                <a className={classes.a} href={this.allReplace(repo.url)}>
                  {repo.name}
                </a>
              </span>
            }
            secondary={
              <React.Fragment>
                {payload.commits &&
                  payload.commits.map(commit => (
                    <span className={classes.commit} key={commit.sha}>
                      {`  | ${commit.author.name}`}
                      {` - ${commit.message}`}
                    </span>
                  ))}

                <span className={classes.created}>
                  {' '}
                  at {new Date(Date.parse(created_at)).toLocaleString()}
                </span>
              </React.Fragment>
            }
          />
        </ListItem>
      );
    });

    return activityList;
  }
}

export default withStyles(styles)(Events);
