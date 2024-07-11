const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/newsapi',
    createProxyMiddleware({
      target: 'https://newsapi.org',
      changeOrigin: true,
      pathRewrite: {
        '^/newsapi': '' // Remove '/newsapi' from the path, effectively keeping the rest of the URL unchanged
      },
      onProxyReq: (proxyReq, req, res) => {
        proxyReq.setHeader('origin', 'http://localhost:5173');
        proxyReq.setHeader('referer', 'http://localhost:5173/');
      },
      onProxyRes: (proxyRes, req, res) => {
        proxyRes.headers['Access-Control-Allow-Origin'] = '*';
      },
    })
  );
};
