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
        libraryDirectory: '',
        camel2DashComponentName: false
      },
      'core'
    ],
    [
      'babel-plugin-import',
      {
        libraryName: '@material-ui/icons',
        libraryDirectory: '',
        camel2DashComponentName: false
      },
      'icons'
    ]
  ]
}
