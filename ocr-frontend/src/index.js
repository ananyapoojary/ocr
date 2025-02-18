import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client';
import './styles/App.css';
import App from './App';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',  // Adjust to your GraphQL server
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
