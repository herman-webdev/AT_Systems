import IORedis from 'ioredis';
import { config, } from '../config/config';

const redis = new IORedis({
	host: config.redis.host,
	port: config.redis.port,
});

export default redis;