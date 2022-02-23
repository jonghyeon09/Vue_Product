const { defineConfig } = require("@vue/cli-service");
const path = require("path");
module.exports = defineConfig({
  transpileDependencies: true,
});
const target = "http://localhost:3000";
module.exports = {
  outputDir: path.resolve(__dirname, "../server/dist"),
  devServer: {
    port: 8080,
    proxy: {
      "^/api": {
        target,
        changeOrigin: true,
      },
      "^/upload": {
        target,
        changeOrigin: true,
      },
      "^/download": {
        target,
        changeOrigin: true,
      },
    },
  },
};
