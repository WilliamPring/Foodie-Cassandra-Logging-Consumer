import { connect } from 'amqplib/callback_api'
import config  from 'config'
import {logger, cassandra} from '.'
class ConfigureConsumer {
    constructor() {
        this._config = config.get('Queue')
        this._ampqUrl = `amqp://${this._config.user}:${this._config.secret}@${this._config.url}`
        console.log(this._ampqUrl)
    }

    configure() {
        const {name, key, exchange } = this._config;
        logger.info('@ConfigureConsumer connecting')
        connect(this._ampqUrl, (err, conn) => {
            if(err) { throw err }
            logger.info('@ConfigureConsumer %s queue connecting', this._ampqUrl)
            conn.createChannel((errCh, channel) => {
                logger.info('@ConfigureConsumer channel created with topic')
                channel.assertExchange(exchange, 'topic', { durable: false } )
                //name = queue name
                channel.assertQueue(name, { exclusive: true }, (errQ, q) => {
                    if (errQ) { throw errQ; }
                    //key: *.logging.* [app].logging.[severity]
                    //example: review.logging.error | review.logging.exception
                    logger.info('@ConfigureConsumer exchange: %s queue: %s key: %s', exchange, name, key)
                    channel.bindQueue(q.queue, exchange, key );
                    channel.consume(q.queue, (msg) => {
                        //buffer: have to convert to json
                        logger.info('@Consumer Request with topic: %s', JSON.parse(msg.content))
                        cassandra.logMessage(JSON.parse(msg.content))
                    }, { noAck: true  });
                });
            })
        });
    }
}


export default new ConfigureConsumer;