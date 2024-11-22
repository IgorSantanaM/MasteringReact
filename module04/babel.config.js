module.exports = {
    presets: [
        "@babel/preset-env", // understand exports and imports, make it browse readable 
        "@babel/preset-react" // jsx -> js in the browser
    ],
    plugins: [
        '@babel/plugin-proposal-class-properties' // enable to work with the state variables
    ]
}