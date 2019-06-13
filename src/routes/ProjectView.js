import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';
import {
  Grid,
  Card,
  CardContent,
  Button,
  CardActions,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Icon,
  withStyles
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import liveServers from '../LiveServers';
import Server from '../components/Server';
import ProjectImages from '../components/ProjectImages';

const styles = {
  a: {
    textDecoration: 'none'
  }
};

class ProjectView extends Component {
  state = {
    markdown: ''
  };

  componentDidMount() {
    const { match } = this.props;

    axios.get(`${match.params.project}.md`).then(response => {
      this.setState({ markdown: response.data });
    });

    for (let i = 0; i < liveServers.length; i += 1) {
      const server = liveServers[i];

      if (server.name === match.params.project) {
        this.setState({ server });
      }
    }
  }

  render() {
    const { markdown, server } = this.state;
    const { classes } = this.props;

    return (
      <Grid container spacing={3}>
        <Grid item xs={7}>
          <Card>
            <AppBar position="static" color="secondary">
              <Toolbar variant="dense">
                <Link to="/servers/" className={classes.a}>
                  <IconButton edge="start" aria-label="Menu">
                    <Icon>arrow_back</Icon>
                  </IconButton>
                </Link>
                <Typography variant="h6" color="inherit">
                  {server && server.name}
                </Typography>
              </Toolbar>
            </AppBar>
            <CardContent>
              <ReactMarkdown source={markdown} escapeHtml={false} />
            </CardContent>
          </Card>

          <ProjectImages />
        </Grid>

        <Grid item xs={5}>
          {server && (
            <Server {...server}>
              <CardActions>
                <Button
                  target="_blank"
                  href={server.link}
                  variant="contained"
                  color="secondary"
                  fullWidth
                >
                  Go to link
                </Button>
              </CardActions>
            </Server>
          )}
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(ProjectView);
