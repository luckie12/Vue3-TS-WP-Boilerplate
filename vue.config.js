const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    chainWebpack: config => {
        config.module.rule('md').test(/\.md/i).use('raw-loader').loader('raw-loader')
    },
    // configureWebpack: {
    //   plugins: [
    //       new CopyPlugin({
    //           patterns: [
    //               { from: 'src/assets/css/', to: 'ccs/' },
    //           ],
    //       })
    //   ]
    // },
    css: {
        loaderOptions: {
            sass: {
                sassOptions: {
                    indentedSyntax: true,
                    includePaths: ['node_modules', 'src/assets/css/']
                },
                additionalData(data, cfg) {
                    if (cfg.resourcePath.includes('.vue'))
                        return '@import _import\n' + data;
                    return data;
                }
            }
        }
    }
}
