import ConfigureLogger from './ConfigureLogger'
import ConfigureCassandra from './ConfigureCassandra'


const loggerInstance = new ConfigureLogger();
const cassandraInstance = new ConfigureCassandra();


export const logger = loggerInstance.logger;
export const cassandra = cassandraInstance.getClinet()

