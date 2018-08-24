const styles = theme => ({
  root: {
    display: 'flex',
    color: theme.palette.grey[500],
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  menuButton: {
    display: 'block',
    textAlign: 'center',
    paddingLeft: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    color: 'inherit',
    transition: '.1s linear',
    borderRadius: 0,
    '&:hover': {
      color: theme.palette.turquoise,
      backgroundColor: 'inherit'
    },
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      justifyContent: 'flex-start'
    },
  },
  navLink: {
    textDecoration: 'none',
    color: 'inherit'
  },
  navLinkCaption: {
    textAlign: 'center',
    color: 'inherit',
    textTransform: 'none',
    [theme.breakpoints.down('sm')]: {
      marginLeft: theme.spacing.unit * 2,
      fontSize: '1.3em'
    },
  },
  navLinkIcon: {
    color: 'inherit'
  },
  navLinkActive: {
    color: theme.palette.turquoise
  }
});

export default styles;