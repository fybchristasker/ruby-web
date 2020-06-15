module.exports = {
  presets: [
    [
      'next/babel',
      {
        targets: {
          browsers: ['IE >= 9']
        },
        useBuiltIns: 'usage'
      }
    ]
  ],
  plugins: [
    '@babel/plugin-transform-arrow-functions',
    [
      'babel-plugin-import',
      {
        libraryName: '@material-ui/core',
        // Use "'libraryDirectory': ''," if your bundler does not support ES modules
        libraryDirectory: '',
        camel2DashComponentName: false
      },
      'core'
    ],
    [
      'babel-plugin-import',
      {
        libraryName: '@material-ui/icons',
        // Use "'libraryDirectory': ''," if your bundler does not support ES modules
        libraryDirectory: '',
        camel2DashComponentName: false
      },
      'icons'
    ]
  ]
}
