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
//     release: 'v1.0.9', // 应该可以动态设置
//     dsn: 'https://f36c12db53d94e21b3eeecdf890dfcc4@o384506.ingest.sentry.io/5227797',
//     environment: 'staging',
//     debug: true,
// });
// Sentry.configureScope((scope) => {
//     scope.setUser({email: 'nanlan.yj@foxmail.com'});
// });
// throw new Error('这是一个错误');
window._ = lodash;
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
