const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 3,
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
    backgroundColor: theme.palette.grey[200],
    color: theme.palette.grey[500]
  },
  subheading: {
    fontWeight: 600,
    color: theme.palette.turquoise,
  },
  caption: {
    color: 'inherit'
  },
  copyright: {
    position: 'relative',
    textAlign: 'center',
    '&:before': {
      content: '""',
      display: 'block',
      width: 'calc(100% + 24px)',
      left: '50%',
      top: 0,
      transform: 'translateX(-50%)',
      height: 1,
      backgroundColor: theme.palette.grey[100],
      position: 'absolute'
    }
  },
  nav: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    display: 'flex',
    flexDirection: 'column'
  },
  link: {
    marginTop: theme.spacing.unit,
    paddingTop: theme.spacing.unit / 2,
    paddingBottom: theme.spacing.unit / 2,
    '&:hover': {
      color: theme.palette.turquoise
    }
  }
});

export default styles;