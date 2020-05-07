import {auth, Client, types} from 'cassandra-driver';
import config from 'config'
import {values} from 'lodash'
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

    async logMessage(message) {
        const log_id = types.TimeUuid.now();
        message[log_id] = log_id;
        console.log(message)
        const data = values(message)
        console.log(data)
        await this._client.execute('INSERT INTO foodie.logs (log_application, log_type, log_application_action, log_message, log_timestamp, log_id) VALUES (?, ?, ?, ?, ?, ?)',
                                    data, { prepare: true });
        console.log('Row updated on the cluster');

    }

    async getClinet() {
        return this._client;
    }

}