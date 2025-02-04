import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
    base: "/pages-site/",
    build: {
        outDir: "docs",
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                about: resolve(__dirname, "about/index.html"),
                button: resolve(__dirname, "button/index.html"),
                hellorollup: resolve(__dirname, "hellorollup/index.html")
            },
        },
    },
});