const styles = theme => ({
  chip: {
    backgroundColor: theme.palette.grey[100],
    border: `1px solid ${theme.palette.grey[400]}`,
    borderRadius: 5,
    color: theme.palette.turquoise,
    margin: theme.spacing.unit
  },
  filters: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  icon: {
    color: theme.palette.grey[400],
    '&:hover': {
      color: theme.palette.grey[500],
      backgroundColor: 'inherit'
    }
  },
  paper: {}
});

export default styles;