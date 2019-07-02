import { createMuiTheme } from '@material-ui/core';
import { blue, green, orange, red } from '@material-ui/core/colors';

export const fullName = 'Marten Hoekstra';
export const linkedInUser = 'martenlhoekstra';
export const githubUser = 'lolwuz';

export const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
    primary: blue,
    secondary: green
  },
  status: {
    danger: orange
  },
  mixins: {
    toolbar: {
      backgroundColor: blue[500]
    }
  }
});

export const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: red,
    secondary: green
  },
  status: {
    danger: orange
  },
  mixins: {
    toolbar: {
      backgroundColor: red[500]
    }
  }
});

export const languagesList = [
  { name: 'HTML', color: blue[700] },
  { name: 'Javascript', color: blue[500] },
  { name: 'CSS', color: blue[300] },
  { name: 'Socket.io', color: blue[700] },

  { name: 'Python', color: red[500] },
  { name: 'Flask', color: red[700] },

  { name: 'Java', color: orange[500] },
  { name: 'C++', color: orange[500] },
  { name: 'C#', color: orange[500] }
];
