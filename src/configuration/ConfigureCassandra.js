import {auth, Client, types} from 'cassandra-driver';
import config from 'config'
export default class ConfigureCassandra {

    constructor() {
        let cassandraConfig = config.get('Cassandra').config;
        console.log(cassandraConfig)
        let authProvider = new auth.PlainTextAuthProvider('cassandra', 'password123');
        this._client = new Client({
            ...cassandraConfig,
            authProvider
        });
    }

    async getClinet() {
        return this._client;
    }

}

        // const queries = [{
        //       query: 'INSERT INTO foodie.logs (log_application, log_type, log_message, log_timestamp, log_id) VALUES (?, ?, ?, ?, ?)',
        //       params: [ 'hendrixsdfsdfsdfsdf', 'Changed email', 'asdf',new Date(), types.TimeUuid.now() ]
        //     }
        //   ];

        //     try {
        //         await this._client.batch(queries, { prepare: true });

        //     } catch(e) {
        //         console.log(e)
        //     }