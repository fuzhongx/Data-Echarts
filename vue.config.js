const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@use "@/style/main.scss";` // 全局引入
      }
    }
  },
  devServer:{
    
  }
  // configureWebpack: {
  //   plugins: [
  //     new webpack.DefinePlugin({
  //       __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: JSON.stringify(false),
  //     }),
  //   ],
  // },
})
