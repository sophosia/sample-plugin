import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  },
  build: {
    lib: {
      // src/main.ts is where we have exported the component(s)
      entry: resolve(__dirname, "src/main.ts"),
      name: "SamplePlugin",
      // the name of the output files when the build is run
      fileName: "main",
      formats: ["es"]
    }
  }
});
