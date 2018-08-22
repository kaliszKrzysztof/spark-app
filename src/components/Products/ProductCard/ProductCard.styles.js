const styles = theme => ({
  root: {
    height: '100%',
    color: theme.palette.turquoise,
  },
  paper: {
    height: '100%',
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    borderRadius: 0,
    backgroundColor: theme.palette.grey[100]
  },
  subheading: {
    fontWeight: 600,
  },
  body1: {
    marginTop: theme.spacing.unit / 2,
    fontWeight: 600,
  },
  colorButtons: {
    marginTop: theme.spacing.unit / 2,
    display: 'flex',
    justifyContent: 'center'
  },
  button: {
    boxShadow: 'none',
    marginLeft: theme.spacing.unit / 2,
    marginRight: theme.spacing.unit / 2,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },
  inactiveIcon: {
    display: 'none'
  },
  activeIcon: {
    color: theme.palette.orange
  },
  image: {
    maxWidth: '100%'
  }
});

export default styles;