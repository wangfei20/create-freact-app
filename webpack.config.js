
import path from 'path'
import { fileURLToPath } from 'url';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config = {
  mode: 'development',
  entry: ['./src/index.js'],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx|mjs)$/,
        exclude: /node_modules/,
        use: [
             'babel-loader'
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader', 
          'css-loader',
          'postcss-loader',
        ],
      },
    ],
  },
  plugins:[
    autoprefixer,
    tailwindcss
  ],
  resolve: {
    extensions: ['.js', '.jsx', ".mjs"],
    alias: {
      '@': path.resolve(__dirname), 
      'freact': path.resolve(__dirname,"node_modules","feireact"), 
    },
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    hot: true, 
  },
};

export default config