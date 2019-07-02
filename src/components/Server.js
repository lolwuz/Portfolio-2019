import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { Chip } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import { languagesList as lang } from '../constants';

const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 275,
    maxWidth: 400
  },
  a: {
    textDecoration: 'none'
  },
  h5: {
    color: theme.palette.text.primary
  },
  chip: {
    marginRight: 5,
    marginTop: 5,
    color: 'white'
  },
  cardContent: {
    height: 200,
    maxHeight: 200
  },
  languageList: {
    position: 'absolute',
    bottom: 20
  }
}));

const Server = props => {
  const classes = useStyles();
  const { name, description, img, languages, link, children } = props;

  const getLanguageColor = name => {
    let color = blue[700];
    for (let i = 0; i < lang.length; i += 1) {
      const language = lang[i];
      if (language.name === name) {
        const { color: newColor } = language;
        color = newColor;
      }
    }

    return { backgroundColor: color };
  };

  const languagesList = languages.map(language => (
    <Chip
      key={language}
      label={language}
      style={getLanguageColor(language)}
      size="small"
      className={classes.chip}
    />
  ));

  return (
    <Card width={1 / 2} className={classes.card}>
      <CardActionArea>
        <Link
          target="_blank"
          to={{
            pathname: link || `/view/${name}`
          }}
          className={classes.a}
          replace
        >
          {img && (
            <CardMedia
              component="img"
              alt={img}
              height="140"
              src={`/static/${img}`}
              title="Contemplative Reptile"
            />
          )}

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
};

export default Server;
