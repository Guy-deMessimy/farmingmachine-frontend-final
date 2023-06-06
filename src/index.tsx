import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Provider as StyletronProvider, DebugEngine } from 'styletron-react';
import { Client as Styletron } from 'styletron-engine-atomic';
import { createUploadLink } from 'apollo-upload-client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';

const debug = process.env.NODE_ENV === 'production' ? void 0 : new DebugEngine();
const engine = new Styletron();
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const uploadLink = createUploadLink({
  uri: process.env.REACT_APP_API_URI,
  headers: {
    'Apollo-Require-Preflight': 'true',
  },
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: uploadLink,
});

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <StyletronProvider value={engine} debug={debug} debugAfterHydration>
        <App />
      </StyletronProvider>
    </ApolloProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
