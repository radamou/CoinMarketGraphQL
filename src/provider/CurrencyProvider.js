const { AbstractProvider } = require('./AbstractProvider');

class CurrencyProvider extends AbstractProvider {
    constructor() {
        super();
    }

    async getAll() {
        const requestOptions = {
            qs: {
                start: 1,
                limit: 5000,
                convert: 'USD'
            },
            json: true,
            gzip: true
        };

        const result = await this.get(`${this.baseUrl}/listings/latest`);

        return result.data;
    }
}

exports.CurrencyProvider = CurrencyProvider;
