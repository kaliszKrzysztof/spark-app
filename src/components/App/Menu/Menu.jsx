import React from 'react';
import { NavLink } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {
  FaUserAlt, FaShoppingCart, FaSearch, FaHeart
} from 'react-icons/fa';

const Menu = ({ openCart, classes }) => (
  <div className={classes.root}>
    <NavLink exact to="/login" className={classes.navLink} activeClassName={classes.navLinkActive}>
      <Button disableRipple className={classes.menuButton}>
        <FaUserAlt size={30} className={classes.navLinkIcon} />
        <Typography variant="caption" className={classes.navLinkCaption}>
          {'Login'}
        </Typography>
      </Button>
    </NavLink>
    <NavLink exact to="/wish-list" className={classes.navLink} activeClassName={classes.navLinkActive}>
      <Button disableRipple className={classes.menuButton}>
        <FaHeart size={30} className={classes.navLinkIcon} />
        <Typography variant="caption" className={classes.navLinkCaption}>
          {'Wish List'}
        </Typography>
      </Button>
    </NavLink>
    <Button disableRipple className={classes.menuButton} onClick={openCart}>
      <FaShoppingCart size={30} className={classes.navLinkIcon} />
      <Typography variant="caption" className={classes.navLinkCaption}>
        {'Cart'}
      </Typography>
    </Button>
    <Button disableRipple className={classes.menuButton}>
      <FaSearch size={30} className={classes.navLinkIcon} />
      <Typography variant="caption" className={classes.navLinkCaption}>
        {'Search'}
      </Typography>
    </Button>
  </div>
);

export default Menu;