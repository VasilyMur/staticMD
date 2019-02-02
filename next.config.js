module.exports = {

    webpack: (config) => {
      config.module.rules.push(
        {
          test: /\.md$/,
          use: 'raw-loader'
        }
      )
    
      return config
    },
  
  
  
    
    // webpack: (config) => {
    //   config.plugins = config.plugins || []
  
    //   config.plugins = [
    //     ...config.plugins,
  
    //     // Read the .env file
    //     new Dotenv({
    //       path: path.join(__dirname, 'variables.env'),
    //       systemvars: true
    //     })
    //   ]
  
    //   return config
    // }
  }
  