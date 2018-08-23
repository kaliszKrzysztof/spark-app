import { createMuiTheme } from '@material-ui/core/styles';
// import { lime, teal } from '@material-ui/core/colors';
import {
  pink,
  green,
  blue,
  orange,
  turquoise
} from './colors';

export default createMuiTheme({
  palette: {
    pink,
    green,
    blue,
    orange,
    turquoise
  },
  typography: {
    fontFamily: [
      'Oswald',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
  },
});