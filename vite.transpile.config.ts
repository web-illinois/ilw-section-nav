import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
    root: "src",
    build: {
        outDir: "../dist",
        lib: {
            name: "ilw-section-nav",
            entry: "ilw-section-nav.ts",
            fileName: "ilw-section-nav",
            formats: ["es"],
        },
        rollupOptions: {
            external: [/^@?lit/, /^@illinois-toolkit/],
        },
    },
    server: {
        hmr: false,
    },
    plugins: [dts()],
});
