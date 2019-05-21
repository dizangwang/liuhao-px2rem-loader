# liuhao-px2rem-loader
####把项目中的大于1的px都转为rem,设计稿是宽750

#####用法：在webpack中的配置

```
 module: {
      rules: [{
        test: /\.(css|vue)$/,
        use: [{
          loader: 'liuhao-px2rem-loader',
          // options her
        }]
      }]
    }
  ```
  ###### 刘浩2561179983
