import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();
const db = admin.firestore();

async function getAuthToken(request) {
  if (!request.headers.authorization) {
    return null;
  }
  const token = request.headers.authorization.replace(/^Bearer\s/, "");
  return token;
}

async function getUserIdFromGraphqlAuth(request) {
  try {
    const token = await getAuthToken(request);
    if (token === null) {
      return null;
    }
    const payload = await admin.auth().verifyIdToken(token);
    return payload.uid;
  } catch (err) {
    return null;
  }
}

const typeDefs = '' // this would be loaded from GraphQL schema file

const resolvers = {
  Query: {
    getMyMaps: async (parent, args, {userId, db}) => {
      if (userId === null) {
        return {
          message: "UNAUTHENTICATED",
        };
      }
      // example of using the userId and db values
      const maps = await getMapsForUser(userId, db);
      return maps;
    },
  },
  Mutation: {},
  MapListResponse: {
    __resolveType(obj) {
      if (typeof(obj.message) !== "undefined") {
        return "ApplicationError";
      }
      return "MapListResult";
    },
  },
};

const graphqlConfig = {
  typeDefs,
  resolvers,
};

const graphqlServer = new ApolloServer({
  ...graphqlConfig,
  context: async ({req}) => {
    const userId = await getUserIdFromGraphqlAuth(req);
    return {
      userId,
      db,
    };
  },
});
const graphqlHandler = graphqlServer.createHandler();
exports.graphql = functions.https.onRequest(graphqlHandler);