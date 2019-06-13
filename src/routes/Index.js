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
import Axios from 'axios';
import red from '@material-ui/core/colors/red';
import Contact from '../components/Contact';

const styles = {
  card: {
    maxWidth: 345
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
  }
};

class Index extends Component {
  state = {
    user: {}
  };

  componentDidMount() {
    Axios.get('https://api.github.com/users/lolwuz').then(user => {
      this.setState({ user: user.data });
    });
  }

  render() {
    const { classes } = this.props;
    const { user } = this.state;
    const { name, login, bio, avatar_url } = user;

    return (
      <div>
        <Grid container justify="center" alignItems="center" spacing={3}>
          <Grid item md={4}>
            <Card className={classes.card}>
              <CardHeader
                avatar={<Avatar>L</Avatar>}
                title={name}
                subheader={login}
              />
              <CardMedia
                className={classes.media}
                image={avatar_url}
                title={name}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  {bio}
                </Typography>
              </CardContent>

              <CardActions>
                <Contact />
              </CardActions>
            </Card>
          </Grid>
          <Grid item md={4}>
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

          <Grid item md={4}>
            <Card>
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
