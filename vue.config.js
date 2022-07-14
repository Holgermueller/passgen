module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/passgen/" : "/",

  transpileDependencies: ["vuetify"],
};
