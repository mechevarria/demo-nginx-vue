module.exports = {
    devServer: {
        port: 5000,
        proxy: {
            '/jsonplaceholder': {
                target: 'http://jsonplaceholder.typicode.com',
                secure: false,
                pathRewrite: {
                    '^/jsonplaceholder': ''
                }
            }
        }
    },
    configureWebpack: {
        devtool: 'source-map'
    }
}