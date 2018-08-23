const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 3,
  },
  button: {
    display: 'inline-block',
    minWidth: 0,
    width: 'auto',
    textAlign: 'left',
    '&:hover': {
      backgroundColor: 'inherit'
    }
  },
  drawerHeader: {
    paddingLeft: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
  }
});

export default styles;
