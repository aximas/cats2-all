const path = require('path');

module.exports = {
    webpack: {
        alias: {
            '@components': path.resolve(__dirname, 'src/components'),
            '@pages': path.resolve(__dirname, 'src/pages'),
            '@core': path.resolve(__dirname, 'src/core'),
            '@assets': path.resolve(__dirname, 'src/assets'),
            '@tests': path.resolve(__dirname, 'src/tests'),
            '@skeletons': path.resolve(__dirname, 'src/skeletons'),
            '@routes': path.resolve(__dirname, 'src/routes')
        }
    }
};
