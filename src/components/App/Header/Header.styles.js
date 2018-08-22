const styles = theme => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
    boxShadow: 'none',
    backgroundColor: theme.palette.grey[100]
  },
  logoImg: {
    maxWidth: 100,
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit
  },
  toolbar: {
    justifyContent: 'space-between'
  },
  actionButtons: {
    display: 'flex',
    color: theme.palette.grey[500]
  },
  actionButton: {
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
    }
  },
  navLink: {
    textDecoration: 'none',
    color: 'inherit'
  },
  navLinkCaption: {
    textAlign: 'center',
    color: 'inherit',
    textTransform: 'none'
  },
  navLinkIcon: {
    color: 'inherit'
  },
  navLinkActive: {
    color: theme.palette.turquoise
  }
});

export default styles;