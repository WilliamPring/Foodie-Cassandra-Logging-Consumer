import {auth, Client} from 'cassandra-driver';
export default class ConfigureCassandra {

    constructor() {
        let authProvider = new auth.PlainTextAuthProvider('cassandra', 'password123');
        let client = new Client({
            contactPoints: ['127.0.0.1:9042'],
            keyspace: 'foodie',
            localDataCenter: 'datacenter1',
            authProvider: authProvider
        });
        const query = 'SELECT name, email FROM users WHERE key = ?';
        try {
            client.execute(query, [ 'someone' ])
            .then(result => console.log('User with email %s', result.rows[0].email));
        } catch(e) {
            console.log(e)
        }

    }
}

