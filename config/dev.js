module.exports = ({
    graphqlUrl: 'http://localhost:3004/',
    Cassandra: {
        user: 'cassandra',
        pass: 'test123',
        config: {
            contactPoints: ['127.0.0.1:9042'],
            keyspace: 'foodie',
            localDataCenter: 'datacenter1'
        }
    },
    Queue: {
        url: 'localhost',
        user: 'admin',
        secret: 'pass',
        cachePrefix: '',
        name: 'logging',
        exchange: 'logging',
        key: '*.logging.*',
        cacheOption: {
            cache: false,
            expire: 30000
        },
        topic: {
            logging: '*.logging.*'
        }
    }
})