const styles = theme => ({
  '@global': {
    body: {
      color: theme.palette.darkGrey,
      padding: '0',
      margin: '0',
      lineHeight: '1.4em'
    },
    a: {
      color: 'inherit',
      textDecoration: 'none'
    },
    '*': {
      boxSizing: 'border-box'
    },
  },
  app: {},
  mainContent: {
    // paddingLeft: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 3,
  }
});

export default styles;