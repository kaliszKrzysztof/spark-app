import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {
  FaUserAlt, FaShoppingCart, FaSearch, FaHeart
} from 'react-icons/fa';
import { PRODUCTS_ROUTE_PATH } from '../../../routes/Products/Products';
import logo from '../../../data/images/logo.png';

const Header = ({
  openCart,
  classes
}) => (
  <header>
    <AppBar
      className={classes.appBar}
      position="static"
      color="inherit"
    >
      <Toolbar className={classes.toolbar}>
        <Link
          to={PRODUCTS_ROUTE_PATH}
          className={classes.logo}
        >
          <img className={classes.logoImg} src={logo} alt="spark-app" />
        </Link>
        <div className={classes.actionButtons}>
          <NavLink exact to="/login" className={classes.navLink} activeClassName={classes.navLinkActive}>
            <Button disableRipple className={classes.actionButton}>
              <FaUserAlt size={30} className={classes.navLinkIcon} />
              <Typography variant="caption" className={classes.navLinkCaption}>
                {'Login'}
              </Typography>
            </Button>
          </NavLink>
          <NavLink exact to="/wish-list" className={classes.navLink} activeClassName={classes.navLinkActive}>
            <Button disableRipple className={classes.actionButton}>
              <FaHeart size={30} className={classes.navLinkIcon} />
              <Typography variant="caption" className={classes.navLinkCaption}>
                {'Wish List'}
              </Typography>
            </Button>
          </NavLink>
          <Button disableRipple className={classes.actionButton} onClick={openCart}>
            <FaShoppingCart size={30} className={classes.navLinkIcon} />
            <Typography variant="caption" className={classes.navLinkCaption}>
              {'Cart'}
            </Typography>
          </Button>
          <Button disableRipple className={classes.actionButton} onClick={() => console.log('show search component')}>
            <FaSearch size={30} className={classes.navLinkIcon} />
            <Typography variant="caption" className={classes.navLinkCaption}>
              {'Search'}
            </Typography>
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  </header>
);

Header.propTypes = {
  openCart: PropTypes.func.isRequired,
  classes: PropTypes.shape({
    appBar: PropTypes.string.isRequired,
    toolbar: PropTypes.string.isRequired,
    navLink: PropTypes.string.isRequired,
    navLinkActive: PropTypes.string.isRequired,
    navLinkIcon: PropTypes.string.isRequired,
    navLinkCaption: PropTypes.string.isRequired
  }).isRequired
};

export default Header;