import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import FiltersItem from '../../../components/Filters/FiltersItem';
import styles from '../../../components/Filters/FiltersItem/FiltersItem.styles';
import { SELECTED_FILTERS_KEY } from '../../../reducers/filters';

class FiltersItemContainer extends React.Component {
  state = {
    anchorEl: null
  }

  handleOpenMenu = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleCloseMenu = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    return (
      <FiltersItem
        {...this.props}
        onMenuOpen={this.handleOpenMenu}
        onMenuClose={this.handleCloseMenu}
        anchorEl={anchorEl}
      />
    );
  }
}

const mapStateToProps = ({ filtersReducer }, ownProps) => ({
  selectedElements: filtersReducer[SELECTED_FILTERS_KEY][ownProps.id]
});

export default withStyles(styles)(
  connect(mapStateToProps)(FiltersItemContainer)
);