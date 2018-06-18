import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import withRoot from './WithRoot';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducer from './modules/index';
import Landing from './modules/views/Landing/Landing.jsx';
import {composeWithDevTools} from 'redux-devtools-extension';
const middleware = {};

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(...middleware)
));


const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20
  }
});

const Index = () => (
  <Provider store={store}>
    <Router>
      <Route path="/" component={Landing} />
    </Router>
  </Provider>
);

export default withRoot(withStyles(styles)(Index));
