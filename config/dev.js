module.exports = ({
    graphqlUrl: 'http://localhost:3004/',
    Queue: {
        url: 'localhost',
        user: 'admin',
        secret: 'pass',
        cachePrefix: '',
        name: 'logging',
        cacheOption: {
            cache: false,
            expire: 30000
        },
        topic: {
            image: 'user.review.image',
            error: 'app.alert.error',
            warning: 'app.alert.warning'
        }
    }
})