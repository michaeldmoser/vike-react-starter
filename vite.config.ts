import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import vike from "vike/plugin";
import viteTsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [vike({}), react({}), viteTsconfigPaths()],
});
