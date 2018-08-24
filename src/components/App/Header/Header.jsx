import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { MdMenu } from 'react-icons/md';
import { PRODUCTS_ROUTE_PATH } from '../../../routes/Products/Products';
import logo from '../../../data/images/logo.png';
import Menu from '../../../containers/App/Menu';

const Header = ({
  openMenu,
  classes
}) => (
  <header>
    <AppBar
      className={classes.appBar}
      position="static"
      color="inherit"
    >
      <Toolbar className={classes.toolbar}>
        <IconButton className={classes.habmurgerButton} onClick={openMenu}>
          <MdMenu size={32} />
        </IconButton>
        <Link
          to={PRODUCTS_ROUTE_PATH}
          className={classes.logo}
        >
          <img className={classes.logoImg} src={logo} alt="spark-app" />
        </Link>
        <div className={classes.menu}>
          <Menu />
        </div>
      </Toolbar>
    </AppBar>
  </header>
);

Header.propTypes = {
  classes: PropTypes.shape({
    appBar: PropTypes.string.isRequired,
    toolbar: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    logoImg: PropTypes.string.isRequired,
    habmurgerButton: PropTypes.string.isRequired,
    menu: PropTypes.string.isRequired,
  }).isRequired,
  openMenu: PropTypes.func.isRequired
};

export default Header;