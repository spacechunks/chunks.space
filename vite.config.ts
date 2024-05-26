import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { flatRoutes } from "remix-flat-routes";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

installGlobals();

export default defineConfig({
  plugins: [
    remix({
      // ignore all files in routes folder to prevent
      // default remix convention from picking up routes
      ignoredRouteFiles: ["**/*"],
      routes: async (defineRoutes) => {
        return flatRoutes("routes", defineRoutes);
      },
    }),
    ViteImageOptimizer({}),
    tsconfigPaths(),
  ],
});
