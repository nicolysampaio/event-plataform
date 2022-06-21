import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4o8wrvf1br401xxcowc5si2/master",
  cache: new InMemoryCache(),
});
