import React, { Component } from "react";
import Server from "../components/Server";
import Grid from '@material-ui/core/Grid';

const servers = [
  {
    name: 'MySchoolsMod',
    description: 'Moderation tool for MySchoolsNetwork',
    link: 'https://mod.myschoolsnetwork.com',
    languages: ['Javascript', 'React', 'Redux'],
    img: 'myschoolsnetwork.png'
  },
  {
    name: 'Buggle.ga',
    description: 'A word game inspired by Boggle. Made in Jquery, Angular and React using Socket.io for multiplayer gameplay.',
    link: 'https://buggle.ga',
    languages: ['Javascript', 'Redux', 'Angular', 'Jquery', 'Socket.io', 'Python', 'Flask'],
    img: 'buggle.jpg'
  },
  {
    name: 'Portfolio',
    description: 'Personal portfolio website created by Marten Hoekstra',
    link: 'https://lolwuz.ga',
    languages: ['Javascript', 'React', 'Material-ui'],
    img: 'portfolio.png'
  },
  {
    name: 'IMDB Movie Chatbot',
    description: 'Personal portfolio website created by Marten Hoekstra',
    link: 'https://lolwuz.ga',
    languages: ['Java'],
    img: 'portfolio.png'
  },
  {
    name: 'Teamspeak 3',
    description: 'Multi-purpose voice server for projects, work and discussion',
    link: 'ts3server://arankieskamp.com',
    languages: [],
    img: 'ts.jpg'
  },
  {
    name: 'Discord',
    description: '058 Discord server',
    link: 'https://discord.gg/PRGrXjh',
    languages: [],
    img: 'discord.jpg'
  },
]


class Servers extends Component {


  render() {
    const serverList = servers.map(server => <Grid item md={4}><Server {...server}/></Grid>);

    return (
    <div>
      <Grid container spacing={4}>
        { serverList }
      </Grid>
    </div>
    );
  }
}

export default Servers;
