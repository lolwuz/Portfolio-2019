import React from 'react';
import Grid from '@material-ui/core/Grid';
import Server from '../components/Server';
import liveServers from '../LiveServers';

const Servers = () => {
  const serverList = liveServers.map(server => (
    <Grid item lg={4} key={server.name}>
      <Server {...server} />
    </Grid>
  ));

  return (
    <div>
      <Grid container spacing={4}>
        {serverList}
      </Grid>
    </div>
  );
};

export default Servers;
