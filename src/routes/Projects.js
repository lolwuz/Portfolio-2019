import React, { Component } from "react";
import { Grid } from "@material-ui/core";

const projects = [
  {
    name: "Robotica",
    description: "Robotica project IDP.",
    link: "https://github.com/lolwuz/IDP-2018"
  }
];

class Projects extends Component {
  render() {
    const projectList = projects.map(project => <Grid item md={4}></Grid>);
    return (
      <Grid container spacing={4}>
        { projectList }
      </Grid>
    );
  }
}

export default Projects;
