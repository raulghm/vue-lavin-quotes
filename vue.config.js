module.exports = {
  pwa: {
    name: 'Lavin Quotes'
  },

  pluginOptions: {
    graphqlMock: false,
    apolloEngine: false
  },

  chainWebpack: config => {
    // GraphQL Loader
    config.module
      .rule('gql')
      .test(/\.gql$/)
      .use('graphql-tag/loader')
      .loader('graphql-tag/loader')
      .end()
  }
}
