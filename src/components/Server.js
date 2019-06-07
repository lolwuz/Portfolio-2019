import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Chip } from "@material-ui/core";
import { blue, red, orange } from "@material-ui/core/colors";

const styles = {
  card: {
    maxWidth: 500,
  },
  a: {
    textDecoration: "none"
  },
  chip: {
    marginRight: 5,
    marginTop: 5,
  },
  cardContent: {
    height: 200,
    maxHeight: 200
  },
  languageList: {
    position: 'absolute',
    bottom: 20,
  }
};

const languages = [
  { name: "Javascript", color: blue[500] },
  { name: "Socket.io", color: blue[700] },

  { name: "Python", color: red[500] },
  { name: "Flask", color: red[700] },

  { name: "Java", color: orange[500] }
];

class Server extends Component {
  getLanguageColor = name => {
    let color = blue[700];
    for (const i in languages) {
      const language = languages[i];
      if (language.name === name) {
        color = language.color;
      }
    }

    return { backgroundColor: color };
  };

  getLanguageLink = () => {};

  render() {
    const { name, description, img, link, languages, classes } = this.props;

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
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={link}
        className={classes.a}
      >
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt={img}
              height="140"
              image={"/static/" + img}
              title="Contemplative Reptile"
            />
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="h2">
                {name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {description}
              </Typography>

              <div className={classes.languageList}>
                {languagesList}
              </div>
              
            </CardContent>
          </CardActionArea>
        </Card>
      </a>
    );
  }
}

export default withStyles(styles)(Server);
