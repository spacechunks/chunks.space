import { flatRoutes } from "remix-flat-routes";
import { remixRoutesOptionAdapter } from "@react-router/remix-routes-option-adapter";

const routes = remixRoutesOptionAdapter((defineRoutes) => {
  return flatRoutes("routes", defineRoutes, {/* options */});
});

export default routes;