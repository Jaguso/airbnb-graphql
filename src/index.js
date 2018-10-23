const {GraphQLServer} = require('graphql-yoga')
const Query =  require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');

const resolvers= {
 Query,
 Mutation
}



const server = new GraphQLServer({
    typeDefs:'./src/schema.graphql',
    resolvers,
    context: req => ({
        ...req
    })
})

const options = {
    port: 8000,
    endpoint: '/graphql',
    subscriptions: '/subscriptions',
    playground: '/playground',
  }


server.start(options,({port}) => console.log(`Server is running on localhost:${port}`))
