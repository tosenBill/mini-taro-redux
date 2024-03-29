/*
 * @Descripttion:
 * @version: 1.0.0
 * @Author: Shentong
 * @Date: 2020-08-03 15:26:57
 * @LastEditors: Shentong
 * @LastEditTime: 2020-09-23 21:06:34
 */
const path = require("path");

const config = {
  projectName: "taroApp",
  date: "2020-8-3",
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
  },
  sourceRoot: "src",
  outputRoot: "dist",
  plugins: [],
  defineConstants: {},
  alias: {
    "@/api": path.resolve(__dirname, "..", "api"),
    "@/src": path.resolve(__dirname, "..", "src"),
    "@/servers": path.resolve(__dirname, "..", "servers"),
    "@/resource": path.resolve(__dirname, "..", "src/resource"),
    "@/constants": path.resolve(__dirname, "..", "src/constants"),
    "@/components": path.resolve(__dirname, "..", "src/components"),
  },
  copy: {
    patterns: [],
    options: {},
  },
  framework: "react",
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {},
      },
      url: {
        enable: true,
        config: {
          limit: 1024, // 设定转换尺寸上限
        },
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: "module", // 转换模式，取值为 global/module
          generateScopedName: "[name]__[local]___[hash:base64:5]",
        },
      },
    },
  },
  h5: {
    publicPath: "/",
    staticDirectory: "static",
    postcss: {
      autoprefixer: {
        enable: true,
        config: {},
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: "module", // 转换模式，取值为 global/module
          generateScopedName: "[name]__[local]___[hash:base64:5]",
        },
      },
    },
    esnextModules: ["taro-ui"],
  },
};

module.exports = function (merge) {
  if (process.env.NODE_ENV === "development") {
    return merge({}, config, require("./dev"));
  }
  return merge({}, config, require("./prod"));
};
