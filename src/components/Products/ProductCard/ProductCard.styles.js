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
  },
  hidden: {
    visibility: 'hidden'
  },
  inactiveIcon: {
    boxShadow: 'none'
  },
  image: {
    maxWidth: '100%',
    transition: 'transform .3s linear',
  },
  hoveredImage: {
    transform: 'scale(1.05)'
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