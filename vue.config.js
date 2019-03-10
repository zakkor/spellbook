module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        data: `@require '@/styles/color-schemes/blue.styl'`
      }
    }
  },
  configureWebpack: {
    output: {
      libraryExport: 'default'
    }
  }
}
