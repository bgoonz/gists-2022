/**
* Works with apollo-server@3.6.1 apollo-server-cloud-functions@3.6.1 firebase-functions@3.11.0 typescript@4.5.4
* You'll need to add `skipLibCheck` for this to work as cors middleware types seems to have an issue in apollo-server-express
*/

import {ExpressContext, gql} from "apollo-server-express";
import {ApolloServer,Config} from "apollo-server-cloud-functions";
import * as functions from "firebase-functions";

const books = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
];

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }
  type Query {
    books: [Book]
  }
`;

const resolvers = {
  Query: {
    books: () => books,
  },
};

const graphqlConfig: Config<ExpressContext> = {
  typeDefs,
  resolvers,
};
const server = new ApolloServer(graphqlConfig);
const handler = server.createHandler();
// Have to cast to any as although the createHandler call will return a function with req, res args TS throws a wobbly
exports.graphql = functions.https.onRequest(handler as any);