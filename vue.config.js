module.exports = {
    devServer: {
        port: 4200,
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