const { MARKET_URL, API_KEY }  = require("./endpoint");
const { RESTDataSource } = require('apollo-datasource-rest');

class AbstractProvider extends RESTDataSource {
    constructor() {
        super();
        this.baseUrl = MARKET_URL;
        this.apiKey = API_KEY;
    }

    willSendRequest(request) {
        request.headers.set('X-CMC_PRO_API_KEY', this.apiKey);
    }
}

exports.AbstractProvider = AbstractProvider;
