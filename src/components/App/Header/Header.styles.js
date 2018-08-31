const styles = theme => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
    boxShadow: 'none',
    backgroundColor: theme.palette.grey[100]
  },
  logo: {},
  logoImg: {
    maxWidth: 100,
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit
  },
  toolbar: {
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'flex-start',
    },
  },
  habmurgerButton: {
    display: 'none',
    color: theme.palette.grey[500],
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  menu: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
});

export default styles;