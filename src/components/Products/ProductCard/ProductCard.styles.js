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
    backgroundColor: theme.palette.grey[100],
    overflow: 'hidden'
  },
  subheading: {
    fontWeight: 600,
    zIndex: '1',
    position: 'relative'
  },
  body1: {
    marginTop: theme.spacing.unit / 2,
  },
  productPrice: {
    padding: theme.spacing.unit / 2,
    border: `1px solid ${theme.palette.turquoise}`,
    display: 'inline-block',
    borderRadius: 5,
    fontWeight: 600,
  },
  colorButtons: {
    marginTop: theme.spacing.unit / 2,
    display: 'flex',
    justifyContent: 'center'
  },
  button: {
    marginLeft: theme.spacing.unit / 2,
    marginRight: theme.spacing.unit / 2,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    boxShadow: theme.shadows[2]
  },
  hidden: {
    visibility: 'hidden'
  },
  activeIcon: {
    boxShadow: `0px 2px 4px -1px rgba(184, 134, 11, 0.5),
    0px 4px 5px 0px rgba(184, 134, 11, 0.5),
    0px 1px 10px 0px rgba(184, 134, 11, 0.5)`
  },
  addToCart: {
    marginTop: theme.spacing.unit * 2,
    color: theme.palette.turquoise,
    border: `1px solid ${theme.palette.turquoise}`,
    boxShadow: 'none',
    backgroundColor: 'inherit'
  }
});

export default styles;