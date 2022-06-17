import {loadTypedefsSync} from "@graphql-tools/load";
import {GraphQLFileLoader} from "@graphql-tools/graphql-file-loader";

const sources = loadTypedefsSync("node_modules/@your-org/graphql-schema/schema.graphql", {
  loaders: [new GraphQLFileLoader()],
});

const typeDefs = sources.map((source) => source.document);

const resolvers = {}

const graphQLConfig = {
  typeDefs,
  resolvers,
}