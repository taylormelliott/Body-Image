import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import App from './App';
import { HashRouter} from 'react-router-dom';


ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  
  document.getElementById('root')
);


