const withImages = require('next-images')

module.exports = withImages({
    esModule: true

    // webpack(config, options) {
    //     return config
    // }

})

module.exports = {
    images: {
        domains: ['files.stripe.com']
    }
}

//
//     webpack: (config, { builId, dev, isServer, defaultLoaders, webpack }) => {
//         config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//))
//         return config
//     }
// }
