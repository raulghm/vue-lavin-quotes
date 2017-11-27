import Vue from 'vue'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'

const uri = process.env.NODE_ENV === 'development' ?
            'http://localhost:60000/simple/v1/cjahltbm701bv0115q42wcmq6' :
            'https://api.graph.cool/simple/v1/cjahpbjf62fze0179mollm66p'

const httpLink = new HttpLink({
  uri,
})

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true,
})

// Install the vue plugin
Vue.use(VueApollo)

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

export {
  apolloClient,
  apolloProvider,
}
