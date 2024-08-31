import { defineConfig } from "vite";
import nested from "postcss-nested";

export default defineConfig({
    css: {
        postcss: {
            plugins: [
                // Native nested CSS is buggy in Firefox, so use this in development as well as in builds
                nested()
            ]
        }
    },
});
