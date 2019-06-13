import React from 'react';
import {
  makeStyles,
  createMuiTheme,
  MuiThemeProvider
} from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FaceIcon from '@material-ui/icons/Face';
import ProjectIcon from '@material-ui/icons/Dashboard';
import DnsIcon from '@material-ui/icons/Dns';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { blue } from '@material-ui/core/colors';
import Routes from './routes/Routes';

const theme = createMuiTheme({
  palette: {
    type: 'dark'
  }
});

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`
    },
    backgroundColor: blue[500]
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  bottom: {
    position: 'relative',
    bottom: 0
  }
}));

function App(props) {
  const { container } = props;
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <ListItem component={Link} to="/" button>
          <ListItemIcon>
            <FaceIcon />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItem>

        <ListItem component={Link} to="/projects/" button>
          <ListItemIcon>
            <ProjectIcon />
          </ListItemIcon>
          <ListItemText primary="Projects" />
        </ListItem>

        <ListItem component={Link} to="/servers/" button>
          <ListItemIcon>
            <DnsIcon />
          </ListItemIcon>
          <ListItemText primary="Live Projects" />
        </ListItem>
      </List>
      <Divider />
      <ListItem href="https://github.com/lolwuz" button>
        <ListItemIcon>
          <DnsIcon />
        </ListItemIcon>
        <ListItemText primary="Github" />
      </ListItem>
      <ListItem component={Link} to="/servers/" button>
        <ListItemIcon>
          <DnsIcon />
        </ListItemIcon>
        <ListItemText primary="LinkedIn" />
      </ListItem>
      <List />

      <div className={classes.bottom}>
        <Typography variant="h6" noWrap>
          lolwuz.ga
        </Typography>
        @2019 - Marten Hoekstra
      </div>
    </div>
  );

  return (
    <Router>
      <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
          <CssBaseline />
          <AppBar position="fixed" className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                className={classes.menuButton}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap>
                Portfolio website by Marten Hoekstra
              </Typography>
            </Toolbar>
          </AppBar>
          <nav className={classes.drawer} aria-label="Mailbox folders">
            <Hidden smUp implementation="css">
              <Drawer
                container={container}
                variant="temporary"
                anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                open={mobileOpen}
                onClose={handleDrawerToggle}
                classes={{
                  paper: classes.drawerPaper
                }}
                ModalProps={{
                  keepMounted: true // Better open performance on mobile.
                }}
              >
                {drawer}
              </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
              <Drawer
                classes={{
                  paper: classes.drawerPaper
                }}
                variant="permanent"
                open
              >
                {drawer}
              </Drawer>
            </Hidden>
          </nav>
          <main className={classes.content}>
            <div className={classes.toolbar} />

            <Routes />
          </main>
        </div>
      </MuiThemeProvider>
    </Router>
  );
}

export default App;
