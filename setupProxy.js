const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use("/api",
        createProxyMiddleware({
            target: 'http://47.115.17.245:2004',
            changeOrigin: true,
            pathRewrite: {
                "^/api": ""
            }
        })
    )
}