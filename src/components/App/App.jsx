import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../containers/App/Header';
import Footer from '../../containers/App/Footer';

const App = ({
  children,
  dialogChildren,
  classes
}) => (
  <div>
    <Header />
    <section className={classes.mainContent}>{children}</section>
    <Footer />
    {dialogChildren}
  </div>
);

App.defaultProps = {
  dialogChildren: []
};

App.propTypes = {
  children: PropTypes.node.isRequired,
  dialogChildren: PropTypes.node,
  classes: PropTypes.shape({
    app: PropTypes.string.isRequired
  }).isRequired,
};

export default App;