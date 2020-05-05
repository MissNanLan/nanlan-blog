import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.less';
import './theme.less'; // 用于覆盖上面定义的变量
import lodash from 'lodash';
// import * as Sentry from '@sentry/browser';
import * as serviceWorker from './serviceWorker';
import App from './App';

moment.locale('zh-cn');
// Sentry.init({
//     release: 'v1.0.0',
//     dsn: 'https://19292cd9b82f422c9ad0bd302f3a7423@o384506.ingest.sentry.io/5215834'

// })
window._ = lodash;

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
