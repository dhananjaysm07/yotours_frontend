// lib/apolloProvider.js
import { ApolloProvider } from "@apollo/client";
// import apolloClient from './apollo-client';
import apolloClientSSR from "./apollo-client-ssr";
export const ApolloProviderWrapper = ({ children }) => (
  <ApolloProvider client={apolloClientSSR}>{children}</ApolloProvider>
);

export default ApolloProviderWrapper;
