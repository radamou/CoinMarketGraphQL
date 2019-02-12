const { ApolloServer } = require('apollo-server');
const { CurrencyProvider } = require('./provider/CurrencyProvider');
const { query } = require('./query');
const { typeDefs } = require('./types');
//const { cache } = require('./cache/RedisCache');

const resolvers = {
    Query: query,
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
    //cache,
    dataSources: () => {
        return {
            coinAPI: new CurrencyProvider(),
        };
    }
});


server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
