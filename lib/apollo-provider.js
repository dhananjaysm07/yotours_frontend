// lib/apolloProvider.js
import { ApolloProvider } from '@apollo/client';
import apolloClient from './apollo-client';
export const ApolloProviderWrapper = ({ children }) => (
  <ApolloProvider client={apolloClient}>
    {children}
  </ApolloProvider>
);

export default ApolloProviderWrapper;
