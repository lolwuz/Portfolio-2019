import { createMuiTheme } from '@material-ui/core';
import { blue, green, orange, red, yellow } from '@material-ui/core/colors';

export const fullName = 'Marten Hoekstra';
export const linkedInUser = 'martenlhoekstra';
export const githubUser = 'lolwuz';

export const theme = createMuiTheme({
  palette: {
    type: 'dark',
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
