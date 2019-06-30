import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import {
  Typography,
  Grid,
  Card,
  Avatar,
  CardMedia,
  CardContent,
  CardActions,
  CardHeader,
  LinearProgress
} from '@material-ui/core';
import axios from 'axios';
import red from '@material-ui/core/colors/red';
import { githubUser } from '../constants';

const styles = {
  card: {
    width: '100%',
    maxWidth: 400
  },
  media: {
    height: 0,
    paddingTop: '80.25%' // 16:9
  },
  avatar: {
    backgroundColor: red[500]
  },
  paper: {
    padding: 20
  },
  textField: {
    marginLeft: '2%',
    width: '49%'
  },
  textField2: {
    width: '49%'
  },
  subSkill: {
    marginLeft: 20,
    marginTop: 20
  },
  a: {
    textDecoration: 'none',
    color: 'gray'
  }
};

class Index extends Component {
  state = {
    user: {},
    avatarUrl: 'some default address/link/values'
  };

  componentDidMount() {
    axios.get(`https://api.github.com/users/${githubUser}`).then(user => {
      this.setState({ user: user.data, avatarUrl: user.data.avatar_url });
    });
  }

  render() {
    const { classes } = this.props;
    const { user, avatarUrl } = this.state;
    const { name, login, bio } = user;

    return (
      <div>
        <Grid container spacing={3}>
          <Grid item md={4} className={classes.card}>
            <Card>
              <CardHeader
                avatar={<Avatar>{login && login[0].toUpperCase()}</Avatar>}
                title={name}
                subheader={login}
              />
              <CardMedia
                className={classes.media}
                image={avatarUrl}
                title={name}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  {bio}
                </Typography>
              </CardContent>

              <CardActions>{/* <Contact /> */}</CardActions>
            </Card>
          </Grid>
          <Grid item md={4} className={classes.card}>
            <Card>
              <CardContent>
                <Typography variant="h6">Javascript/Typescript</Typography>
                <LinearProgress variant="determinate" value={80} />

                <div className={classes.subSkill}>
                  <Typography variant="subtitle2">React</Typography>
                  <LinearProgress variant="determinate" value={80} />

                  <Typography variant="subtitle2">Angular</Typography>
                  <LinearProgress variant="determinate" value={50} />

                  <Typography variant="subtitle2">Jquery</Typography>
                  <LinearProgress variant="determinate" value={40} />

                  <Typography variant="subtitle2">Vue.js</Typography>
                  <LinearProgress variant="determinate" value={20} />
                </div>

                <br />

                <Typography variant="h6">HTML/CSS</Typography>
                <LinearProgress variant="determinate" value={80} />

                <div className={classes.subSkill}>
                  <Typography variant="subtitle2">HTML</Typography>
                  <LinearProgress variant="determinate" value={80} />

                  <Typography variant="subtitle2">CSS</Typography>
                  <LinearProgress variant="determinate" value={60} />

                  <Typography variant="subtitle2">SASS</Typography>
                  <LinearProgress variant="determinate" value={40} />
                </div>
              </CardContent>
            </Card>
          </Grid>

          <Grid item md={4} className={classes.card}>
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="h6">Python</Typography>
                <LinearProgress variant="determinate" value={70} />

                <br />

                <Typography variant="h6">C++</Typography>
                <LinearProgress variant="determinate" value={60} />

                <br />

                <Typography variant="h6">C#</Typography>
                <LinearProgress variant="determinate" value={60} />

                <br />
                <Typography variant="body1">
                  Basic C, Java and PHP experience.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Index);
