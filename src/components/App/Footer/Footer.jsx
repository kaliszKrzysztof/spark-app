import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const footerContent = [{
  label: 'INFORMATION',
  links: [
    {
      url: '/help',
      label: 'Help'
    }, {
      url: '/privacy-policy',
      label: 'Privacy Policy'
    }, {
      url: '/regulations',
      label: 'Regulations'
    }
  ]
}, {
  label: 'CUSTOMER SERVICE',
  links: [
    {
      url: '/returns',
      label: 'Returns'
    }, {
      url: '/complaints',
      label: 'Complaints'
    }, {
      url: '/faq',
      label: 'FAQ'
    }, {
      url: '/gift-cards',
      label: 'Gift cards'
    }
  ]
}, {
  label: 'PAYMENT METHODS',
  links: [
    {
      url: '/online',
      label: 'Online'
    }, {
      url: '/cash-on-delivery',
      label: 'Cash on delivery'
    }
  ]
}, {
  label: 'DELIVERY METHODS',
  links: [
    {
      url: '/dpd',
      label: 'DPD'
    }, {
      url: '/post-office',
      label: 'Post Office'
    }, {
      url: '/personal-collection',
      label: 'Personal collection'
    }
  ]
}];

const FooterElement = ({ element, classes }) => (
  <Grid item xs={6} md={3}>
    <Typography variant="subheading" classes={{ subheading: classes.subheading }}>
      {element.label}
    </Typography>
    <nav className={classes.nav}>
      {element.links.map(link => (
        <Link key={link.label} className={classes.link} to={link.url}>
          <Typography color="inherit">{link.label}</Typography>
        </Link>))
      }
    </nav>
  </Grid>
);

const Footer = ({
  classes
}) => (
  <footer className={classes.root}>
    <Grid container spacing={24}>
      {footerContent.map(element => <FooterElement key={element.label} element={element} classes={classes} />)}
      <Grid className={classes.copyright} item xs={12}>
        <Typography variant="caption" classes={{ caption: classes.caption }}>
          Copyright 2018 ©
        </Typography>
      </Grid>
    </Grid>
  </footer>
);

export default Footer;