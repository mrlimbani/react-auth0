import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import './App.scss';

import AppRotes from './appRoutes'
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  // <React.StrictMode>
  <Auth0Provider
    domain="DOMAIN"
    clientId="CLIENT_ID"
    redirectUri={window.location.origin}
  >
    <AppRotes />
  </Auth0Provider>
  // </React.StrictMode>
  ,
  document.getElementById('root')
);

reportWebVitals();