import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.less';
import lodash from 'lodash';
import './theme.less'; // 用于覆盖上面定义的变量
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App';

moment.locale('zh-cn');
window._ = lodash;
ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
