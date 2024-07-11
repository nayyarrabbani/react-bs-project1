const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/v2',
    createProxyMiddleware({
      target: 'https://newsapi.org',
      changeOrigin: true,
      onProxyReq: (proxyReq, req, res) => {
        // Add custom header to mimic the request as if it's from localhost
        proxyReq.setHeader('origin', 'http://localhost:5173');
        proxyReq.setHeader('referer', 'http://localhost:5173/');
      },
      pathRewrite: {
        '^/v2': '/v2', // Strip out the /v2 prefix when making requests to target
      },
    })
  );
};
