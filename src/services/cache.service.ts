/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import redis from '../cache/redis';

export const cacheService = {
	get: async (key: string) => {
		const cachedData = await redis.get(key);
		return cachedData ? JSON.parse(cachedData) : null;
	},
  
	set: async (key: string, data: any, ttl = 3600) => {
		await redis.set(key, JSON.stringify(data), 'EX', ttl);
	},
};