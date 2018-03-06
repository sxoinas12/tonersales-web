import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';

import 'bootstrap/dist/css/bootstrap-grid.css';
import 'bootstrap/dist/css/bootstrap-reboot.css';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
