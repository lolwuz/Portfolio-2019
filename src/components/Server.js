import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { Chip } from '@material-ui/core';
import { blue, red, orange } from '@material-ui/core/colors';

const styles = {
  card: {
    maxWidth: 500
  },
  a: {
    textDecoration: 'none'
  },
  h5: {
    color: '#ffffff'
  },
  chip: {
    marginRight: 5,
    marginTop: 5
  },
  cardContent: {
    height: 200,
    maxHeight: 200
  },
  languageList: {
    position: 'absolute',
    bottom: 20
  }
};

const languages = [
  { name: 'Javascript', color: blue[500] },
  { name: 'Socket.io', color: blue[700] },

  { name: 'Python', color: red[500] },
  { name: 'Flask', color: red[700] },

  { name: 'Java', color: orange[500] }
];

class Server extends Component {
  getLanguageColor = name => {
    let color = blue[700];
    for (let i = 0; i < languages.length; i += 1) {
      const language = languages[i];
      if (language.name === name) {
        const { color: newColor } = language;
        color = newColor;
      }
    }

    return { backgroundColor: color };
  };

  getLanguageLink = () => {};

  render() {
    const { name, description, img, languages, classes, children } = this.props;

    const languagesList = languages.map((language, key) => (
      <Chip
        key={key}
        label={language}
        style={this.getLanguageColor(language)}
        size="small"
        className={classes.chip}
      />
    ));

    return (
      <Card className={classes.card}>
        <CardActionArea>
          <Link to={`/view/${name}`} className={classes.a}>
            <CardMedia
              component="img"
              alt={img}
              height="140"
              image={`/static/${img}`}
              title="Contemplative Reptile"
            />
            <CardContent className={classes.cardContent}>
              <Typography
                gutterBottom
                variant="h5"
                component="h5"
                className={classes.h5}
              >
                {name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {description}
              </Typography>

              <div className={classes.languageList}>{languagesList}</div>
            </CardContent>
          </Link>
        </CardActionArea>
        {children}
      </Card>
    );
  }
}

export default withStyles(styles)(Server);
