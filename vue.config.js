const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/style/main.scss";` // 全局引入
      }
    }
  },
  // configureWebpack: {
  //   plugins: [
  //     new webpack.DefinePlugin({
  //       __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: JSON.stringify(false),
  //     }),
  //   ],
  // },
})
