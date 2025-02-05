import { ApolloClient, InMemoryCache } from '@apollo/client';


const createApolloClient = () => {
  return new ApolloClient({
    uri: 'http://172.28.210.239:4000/graphql',
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;