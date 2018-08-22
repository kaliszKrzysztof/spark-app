import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../containers/App/Header';
import Footer from '../../containers/App/Footer';

class App extends React.Component {
  componentDidMount() {
    const { startFetchProducts } = this.props;
    startFetchProducts(1500);
  }

  render() {
    const {
      children,
      dialogChildren,
      classes
    } = this.props;
    return (
      <div>
        <Header />
        <section className={classes.mainContent}>{children}</section>
        <Footer />
        {dialogChildren}
      </div>
    );
  }
}

App.defaultProps = {
  dialogChildren: []
};

App.propTypes = {
  startFetchProducts: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  dialogChildren: PropTypes.node,
  classes: PropTypes.shape({
    app: PropTypes.string.isRequired
  }).isRequired,
};

export default App;