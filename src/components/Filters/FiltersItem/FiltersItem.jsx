import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import { capitalizeFirstLetter } from '../../../services/helpers';

class FiltersItem extends React.Component {
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
    const {
      classes, id, name, elements, selectedElements, toggleFilter
    } = this.props;
    const { anchorEl } = this.state;
    return (
      <div>
        <Button
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleOpenMenu}
          variant="outlined"
          className={classes.button}
        >
          {`Choose ${name}`}
        </Button>
        <Menu
          id={id}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          MenuListProps={{
            dense: true,
            disablePadding: true
          }}
          getContentAnchorEl={null}
          disableAutoFocusItem
          elevation={1}
          open={Boolean(anchorEl)}
          onClose={this.handleCloseMenu}
        >
          {elements.map((element) => {
            const selected = selectedElements.indexOf(element) > -1;
            return (
              <MenuItem dense disableGutters key={element} onClick={() => toggleFilter(id, element, !selected)}>
                <Checkbox
                  checked={selected}
                  tabIndex={-1}
                  disableRipple
                />
                {capitalizeFirstLetter(element)}
              </MenuItem>);
          })}
        </Menu>
      </div>
    );
  }
}

FiltersItem.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedElements: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
  toggleFilter: PropTypes.func.isRequired,
  classes: PropTypes.shape({
    button: PropTypes.string.isRequired
  }).isRequired
};

export default FiltersItem;