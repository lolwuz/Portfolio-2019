import React, { Component } from 'react';
import {
  withStyles,
  Typography,
  MobileStepper,
  Button,
  Card,
  CardContent
} from '@material-ui/core';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const styles = {
  root: {
    flexGrow: 1,
    marginTop: 25
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50
  },
  img: {
    overflow: 'hidden',
    display: 'block',
    width: '100%'
  }
};

const tutorialSteps = {
  myschoolsmod: [
    {
      label: 'San Francisco – Oakland Bay Bridge, United States',
      imgPath: '/view/myschoolsmod/1.png'
    },
    {
      label: 'Bird',
      imgPath: '/view/myschoolsmod/2.png'
    },
    {
      label: 'Bali, Indonesia',
      imgPath: '/view/myschoolsmod/3.png'
    }
  ]
};

class ProjectImages extends Component {
  state = {
    step: 0
  };

  handleNext = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  handleBack = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  render() {
    const { step } = this.state;
    const { classes } = this.props;
    const images = tutorialSteps.myschoolsmod;

    return (
      <Card className={classes.root}>
        <CardContent>
          <Typography>{images[step].label}</Typography>
        </CardContent>

        <img
          className={classes.img}
          src={images[step].imgPath}
          alt={images[step].label}
        />
        <MobileStepper
          steps={images.length}
          position="static"
          variant="text"
          activeStep={step}
          nextButton={
            <Button
              size="small"
              onClick={this.handleNext}
              disabled={step === images.length - 1}
            >
              Next
              <KeyboardArrowRight />
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={this.handleBack}
              disabled={step === 0}
            >
              <KeyboardArrowLeft />
              Back
            </Button>
          }
        />
      </Card>
    );
  }
}

export default withStyles(styles)(ProjectImages);
