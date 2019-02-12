const { RedisCache } = require('apollo-server-cache-redis');

exports.cache =  new RedisCache({
        host: 'redis-server',
        // Options are passed through to the Redis client
});
