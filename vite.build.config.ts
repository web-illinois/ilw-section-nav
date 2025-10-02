import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
    root: "src",
    build: {
        outDir: "../dist/cdn",
        lib: {
            name: "ilw-section-nav",
            entry: "ilw-section-nav.ts",
            fileName: "ilw-section-nav",
            formats: ["es"],
        },
    },
    server: {
        hmr: false,
    },
});
