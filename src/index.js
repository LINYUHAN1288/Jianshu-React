import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style.js';
import './statics/iconfont/iconfont';
import { Iconfontstyle } from './statics/iconfont/iconfont';

ReactDOM.render(
  <Fragment>
    <Iconfontstyle />
    <App />
  </Fragment>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
