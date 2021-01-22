import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './i18n';

import App from './App';
import './global.less';

const mountNode = document.getElementById('app');

ReactDOM.render(<App />, mountNode);
