import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import { capitalizeFirstLetter } from '../../../services/helpers';

const FiltersItem = ({
  id,
  name,
  elements,
  selectedElements,
  anchorEl,
  classes,
  onChangeFilter,
  onMenuOpen,
  onMenuClose
}) => (
  <div>
    <Button
      aria-owns={anchorEl ? 'simple-menu' : null}
      aria-haspopup="true"
      onClick={onMenuOpen}
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
      onClose={onMenuClose}
    >
      {elements.map((element) => {
        const selected = selectedElements.indexOf(element) > -1;
        return (
          <MenuItem
            dense
            disableGutters
            key={element}
            onClick={onChangeFilter(id, element, !selected)}
          >
            <Checkbox
              checked={selected}
              tabIndex={-1}
              color="default"
              classes={{
                root: classes.checkboxRoot,
                checked: classes.checkboxChecked,
              }}
            />
            {capitalizeFirstLetter(element)}
          </MenuItem>);
      })}
    </Menu>
  </div>
);

FiltersItem.propTypes = {
  id: PropTypes.string.isRequired,
  elements: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedElements: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
  classes: PropTypes.shape({
    button: PropTypes.string.isRequired,
    checkboxRoot: PropTypes.string.isRequired,
    checkboxChecked: PropTypes.string.isRequired
  }).isRequired
};

export default FiltersItem;