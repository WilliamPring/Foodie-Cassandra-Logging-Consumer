import { cassandra } from '../configuration'


export const saveLogs = async (logging) => {
   //cassandra.
    console.log([...logging])
        //   const queries = [{
        //       query: 'INSERT INTO foodie.logs (log_application, log_type, log_message, log_timestamp, log_id) VALUES (?, ?, ?, ?, ?)',
        //       params: [ 'hendrixsdfsdfsdfsdf', 'Changed email', 'asdf',new Date(), types.TimeUuid.now() ]
        //     }
        //   ];

        try {
            //await cassandra.batch(queries, { prepare: true });

        } catch(e) {
            console.log(e)
        }
}