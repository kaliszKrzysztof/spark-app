import React from 'react';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import { MdClose } from 'react-icons/md';
import Menu from '../../../containers/App/Menu';

const MenuDrawer = ({
  open, closeMenu, classes
}) => (
  <Drawer
    anchor="left"
    open={open}
    onClose={closeMenu}
  >
    <div className={classes.drawerHeader}>
      <IconButton onClick={closeMenu}>
        <MdClose size={28} />
      </IconButton>
    </div>
    <Divider />
    <div
      onClick={closeMenu}
      onKeyDown={closeMenu}
      role="button"
      className={classes.root}
      tabIndex={0}
    >
      <Menu onClick={closeMenu} />
    </div>
  </Drawer>
);

MenuDrawer.propTypes = {
  closeMenu: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  classes: PropTypes.shape({
    root: PropTypes.string.isRequired,
    button: PropTypes.string.isRequired,
  }).isRequired
};

export default MenuDrawer;