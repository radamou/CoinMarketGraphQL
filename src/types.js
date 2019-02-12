const { gql } = require('apollo-server');

const typeDefs = gql`
  type Coin {
    id: Int
    name: String
    slug: String
    circulating_supply: Float
    total_supply: Int
    max_supply: Int
    date_added: String
    num_market_pairs: Int
    platform: String
    cmc_rank: Int
    last_updated: String
    quote: Quote
  }
  type Quote {
    USD: Usd
  }
  type Usd {
    price: Float
    volume_24h: Float
    percent_change_1h: Float
    percent_change_24h: Float
    percent_change_7d: Float
    market_cap: Float
    last_updated: String
  }
  type Query {
    coins: [Coin]
  }
`;

exports.typeDefs = typeDefs;
