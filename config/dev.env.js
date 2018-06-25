'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  GRAPHQL_API: '"http://localhost:60000/simple/v1/cjitlhrfq002i01233p59lpo7"'
})
