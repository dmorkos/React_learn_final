module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js' // bundle all the stuff in the index.js to the bundle.js file
  },
  module: {
    loaders: [
      {
        test: /\.js$/, // for every file with .js we want to run the babel-loader on it
        loader: 'babel-loader' // the babel loader will take care of tranforming the non-standard
        //js that we will be using like jsx and es2015 module whicha re not yet suported in
        // native browsers
      }
    ]
  }
};
