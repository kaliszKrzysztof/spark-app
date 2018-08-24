import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { connect, Provider } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import theme from '../../theme';
import MainContent from '../Routes/MainContent';
import App from '../../components/App';
import styles from '../../components/App/App.styles';
import MenuDrawer from './MenuDrawer';
import Cart from '../Cart';
import { startFetchProducts } from '../../actions/products';

export const AppContainer = ({ store, ...rest }) => (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <App
          {...rest}
          dialogChildren={[
            <Cart key="cart" />,
            <MenuDrawer key="menu" />
          ]}
        >
          <MainContent />
        </App>
      </BrowserRouter>
    </MuiThemeProvider>
  </Provider>
);

const mapDispatchToProps = dispatch => bindActionCreators({ startFetchProducts }, dispatch);
AppContainer.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  store: PropTypes.object.isRequired
};

export default withStyles(styles)(
  connect(null, mapDispatchToProps)(AppContainer)
);