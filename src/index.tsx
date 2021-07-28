import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil'

// Styles
import './index.css';

// Components
import App from './javascript/App';

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
)


