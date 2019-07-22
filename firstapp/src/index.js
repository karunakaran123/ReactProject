import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import 'jquery';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import RouterApp from './Router';

ReactDOM.render(<Router><RouterApp/></Router>, document.getElementById('root'));

