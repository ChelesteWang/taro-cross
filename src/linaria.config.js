module.exports = {
    rules: [
      {
        action: require("linaria/evaluators").shaker,
      },
      {
        test: /node_modules[\/\\](?!@tarojs)/,
        action: "ignore"
      }
    ]
  }