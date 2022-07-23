module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@models': './src/models',
        '@controllers': './src/controllers',
        '@interfaces': './src/interfaces/',
        '@utils': './src/utils/',
        '@config': './src/config/',
        '@services': './src/services/'
      }
    }]
  ],
  ignore: [
    '**/*.spec.ts'
  ]
}
