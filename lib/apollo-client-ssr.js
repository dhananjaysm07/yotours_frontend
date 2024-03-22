import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";

const apolloClientSSR = new ApolloClient({
  ssrMode: true,
  link: createHttpLink({
    uri: process.env.NEXT_PUBLIC_API_URL,
    credentials: "same-origin",
    // headers: {
    //   cookie: req.header("Cookie"),
    // },
  }),
  cache: new InMemoryCache(),
});

export default apolloClientSSR;
