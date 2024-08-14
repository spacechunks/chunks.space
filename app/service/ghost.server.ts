import GhostContentAPI from "@tryghost/content-api";
import * as process from "node:process";

// Create API instance with site credentials
export const ghostApi = new GhostContentAPI({
  url: process.env.GHOST_API_URL,
  key: process.env.GHOST_ADMIN_API_KEY,
  version: "v5.0",
});
