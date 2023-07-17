const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  const appProxy = createProxyMiddleware("/api/RrrGenerator", {
    target: `https://floypayapi.niceforest-8ffed372.southafricanorth.azurecontainerapps.io`,
    changeOrigin: true,
    secure: false,
  });

  app.use(appProxy);
};
