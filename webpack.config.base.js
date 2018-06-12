const webpack = require('webpack')
const path = require('path')

const BASE_PLUGINS = [
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      PLATFORM_ENV: JSON.stringify('web')
    }
  })
]

module.exports = {
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: BASE_PLUGINS,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules\//,
        include: [
          path.join(__dirname, 'node_modules/react-native-easy-grid'),
          path.join(__dirname, 'src')
        ],
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime', 'react-native-web']
          }
        }]
      },
      {
        test: /\.css$/,
        use: [ 'style-loader',
               {
                 loader: 'css-loader'
               }
             ]
      },
      {
        test: /.(jpg|png|svg)$/,
        use: ['file-loader']
      }
    ]
  },
  resolve: {
    alias: {
      'react-native/Libraries/Renderer/shims/ReactNativePropRegistry': path.join(
        __dirname,
        'node_modules/react-native-web/dist/modules/ReactNativePropRegistry'
      ),
      'react-native': 'react-native-web'
    },
    extensions: ['.web.js', '.js', '.json']
  }
};
