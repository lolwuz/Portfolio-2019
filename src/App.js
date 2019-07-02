import { Badge } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import { blue } from '@material-ui/core/colors';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles, MuiThemeProvider } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import LightIcon from '@material-ui/icons/BrightnessHigh';
import DarkIcon from '@material-ui/icons/BrightnessLow';
import CodeIcon from '@material-ui/icons/Code';
import ProjectIcon from '@material-ui/icons/Dashboard';
import DnsIcon from '@material-ui/icons/Dns';
import FaceIcon from '@material-ui/icons/Face';
import GroupIcon from '@material-ui/icons/Group';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Events from './components/Events';
import {
  darkTheme,
  fullName,
  githubUser,
  lightTheme,
  linkedInUser
} from './constants';
import Routes from './routes/Routes';

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
  },
  grow: {
    flexGrow: 1
  },
  lightButton: {
    float: 'right'
  }
}));

const App = props => {
  const { container } = props;
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isDarkTheme, setDarkTheme] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const switchTheme = () => {
    setDarkTheme(!isDarkTheme);
  };

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
      <ListItem
        component={Link}
        target="_blank"
        to={{
          pathname: `https://github.com/${githubUser}/`
        }}
        button
      >
        <ListItemIcon>
          <CodeIcon />
        </ListItemIcon>
        <ListItemText primary="Github" />
      </ListItem>
      <ListItem
        component={Link}
        target="_blank"
        to={{
          pathname: `https://www.linkedin.com/in/${linkedInUser}/`
        }}
        button
      >
        <ListItemIcon>
          <GroupIcon />
        </ListItemIcon>
        <ListItemText primary="LinkedIn" />
      </ListItem>
      <Divider />
      <Events />
      <List />
    </div>
  );

  return (
    <Router>
      <MuiThemeProvider theme={isDarkTheme ? lightTheme : darkTheme}>
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
                Portfolio website by {fullName}
              </Typography>

              <div className={classes.grow} />
              <IconButton
                aria-label="Show 4 new mails"
                color="inherit"
                onClick={switchTheme}
              >
                <Badge color="secondary">
                  {isDarkTheme ? <LightIcon /> : <DarkIcon />}
                </Badge>
              </IconButton>
            </Toolbar>
          </AppBar>

          <nav className={classes.drawer} aria-label="Mailbox folders">
            <Hidden smUp implementation="css">
              <Drawer
                container={container}
                variant="temporary"
                anchor="left"
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
};

export default App;
