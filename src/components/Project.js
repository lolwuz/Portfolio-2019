import React from 'react';
import { useStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const Project = props => {
  const { img, name, description } = props;
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={img}
            height="140"
            src={`/static/${img}`}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default Project;
