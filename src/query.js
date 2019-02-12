const query = {
    coins: async (_source, _args, { dataSources }) => {
        return await dataSources.coinAPI.getAll();
    }
};
module.exports.query = query;


