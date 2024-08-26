import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
    root: "src",
    build: {
        outDir: "../dist",
        lib: {
            name: "ilw-section-nav",
            entry: "ilw-section-nav.js",
            fileName: "ilw-section-nav",
            formats: ["es", "cjs", "umd"],
        },
        rollupOptions: {
            output: {
                assetFileNames: (chunkInfo) => {
                    if (chunkInfo.name === "style.css") return "ilw-section-nav.css";
                },
            },
        },
    },
    server: {
        hmr: false,
    },
});
