module.exports = {
    devServer: {
        proxy: { // 设置代理
            '/api': {
                target: 'http://139.196.41.125:8999',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            },
        }
    },
}