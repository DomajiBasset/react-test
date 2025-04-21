import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        tailwindcss(),
        react({
            babel: {
                configFile: true, //use babel.config.js
            },
        }),
    ],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
            // "jquery-vite": 'framework/js/jquery.min.js' //已在html引入
        },
    },
    server: {
        open: "/", // 設定開發伺服器啟動時自動打開 index.html
    },
    define: {
        'process.env': {}
    },
    build: {
        manifest: true,
        minify: true,
        sourcemap: true,
        outDir: "dist", // 設置打包輸出目錄，默認為 'dist'
        lib: { //單純打包庫(不含html)
            entry: './src/main.tsx',
            name: 'Lib',
            // formats: ['cjs'],
            // cssFileName: 'react-lib-style',
            // fileName: (format, entryName) => {
            //   return format === 'cjs' ? `${entryName}.cjs` : `${entryName}.js`
            // }
        },
        rollupOptions: { //打包多入口或文件，lib優先級較高，避免同時使用
            // input: {
            //   'react-main': './src/main.tsx',
            //   'lib-main': './framework/js/main.js',
            //   'lib-main-rwd': './framework/js/main_rwd.js',
            // },
            // inlineDynamicImports: false, 是否根據腳本動態加載打包
            // entryFileNames: 'react-lib.umd.js' //設定輸出的fileName
            output: [
                {
                    entryFileNames: 'react-lib.umd.js' //設定輸出的fileName
                }
                // {
                //   format: 'cjs', // CommonJS 格式
                //   dir: 'dist/cjs',
                //   entryFileNames: '[name].cjs.js', // 指定輸出文件名
                //   preserveModules: false, // 如果不需要模塊保留的話
                // },
                // {
                //   format: 'es', // ES 模塊格式
                //   dir: 'dist/es',
                //   entryFileNames: '[name].mjs.js', // 指定輸出文件名
                //   preserveModules: false, // 保持模塊結構
                // },
            ]

            //建構網站或多個html(含html)
            // input: "./src/index.html",
            // external(source, importer, isResolved) { //external 配置只會影響到 模塊 依賴
        },
    },
    base: "/",
    // esbuild: {
    //   loader: "jsx",
    //   include: /.*\.jsx?$/,
    //   exclude: [],
    // },
    optimizeDeps: {
        esbuildOptions: {
            loader: {
                ".js": "jsx",
            },
        },
    },
});
