import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import axios from 'axios';
import Project from '../components/Server';
import { githubUser } from '../constants';

class Projects extends Component {
  state = {
    projects: []
  };

  componentDidMount() {
    axios.get(`https://api.github.com/users/${githubUser}/repos`).then(r => {
      this.setState({ projects: r.data });
    });
  }

  render() {
    const { projects } = this.state;

    const projectList = projects.map(project => (
      <Grid item md={4} key={project.id}>
        <Project
          name={project.name}
          description={project.description}
          languages={project.language ? [project.language] : []}
          link={project.html_url}
        />
      </Grid>
    ));

    return (
      <div>
        <Grid container spacing={4}>
          {projectList}
        </Grid>
      </div>
    );
  }
}

export default Projects;
