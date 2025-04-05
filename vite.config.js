import { defineConfig } from "vite";

export default defineConfig({
  // ...
  resolve: {
    alias: {
      vars: "./src/vars.css",
    },
  },
});
