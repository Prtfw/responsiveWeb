module.exports ={
    entry: "./app/app.js",
    output: {
        path: './app/temp',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {loader: 'babel',
            query: {
                presets: ['es2015']
            },
            test: /\.js$/,
            exclude: /node_modules/
            }
            ]
    },
//     resolve: {
//     alias: {
//       'waypoints': __dirname + '/node_modules/waypoints/lib/noframework.waypoints.js'
//     }
//   }
        
}