import { prepareRoutes } from "@curi/router";
import Home from "./Home";
import Method from "./Method";
import NotFound from "./NotFound";

export default prepareRoutes([
  {
    name: "Home",
    path: "",
    respond: () => {
      return {
        body: Home
      };
    }
  },
  {
    name: "Contact",
    path: "contact",
    respond: () => {
      return {
        body: Contact
      };
    },
    children: [
      {
        name: "Method",
        path: ":method",
        respond: () => {
          return {
            body: Method
          };
        }
      }
    ]
  },
  {
    name: "NotFound",
    path: "(.*)",
    respond: () => {
      return {
        body: NotFound
      };
    }
  }
]);
