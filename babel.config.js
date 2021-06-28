module.exports = api => {
  api.cache(false)

  return {
    presets: [
      '@babel/preset-react',
      '@xstyled/babel-preset-emotion-css-prop',
    ],
    'plugins': [
      [
        '@emotion',
        {
          importMap: {
            '@xstyled/emotion': {
              default: {
                canonicalImport: ['@emotion/styled', 'default'],
                styledBaseImport: ['@xstyled/emotion', 'default'],
              }
            }
          }
        }
      ]
    ]
  }
}
