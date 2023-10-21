import { config as dotenvConfig, } from 'dotenv'

dotenvConfig()

export const config = {
	baseUrl: String(process.env['DOMAIN_NAME']),
	cors: {
		origin: process.env['CORS_ORIGIN']
			? (JSON.parse(process.env['CORS_ORIGIN']) as string[])
			: ['*'],
		maxAge: process.env['CORS_MAX_AGE'] ? Number(process.env['CORS_MAX_AGE']) : 600,
		headers: process.env['CORS_HEADERS']
			? (JSON.parse(process.env['CORS_HEADERS']) as string[])
			: ['Accept', 'Content-Type', 'Authorization'],
		credentials: process.env['CORS_ALLOW_CREDENTIALS'] === 'true' ? true : false,
		exposedHeaders: process.env['CORS_EXPOSE_HEADERS']
			? (JSON.parse(process.env['CORS_EXPOSE_HEADERS']) as string[])
			: ['content-type', 'content-length', 'Content-Disposition'],
	},
	server: {
		port: process.env['SERVER_PORT_MAIN'] ? Number(process.env['SERVER_PORT']) : 3000,
		host: process.env['SERVER_HOST'] ? process.env['SERVER_HOST'] : 'localhost',
		shutdownTimeout: process.env['SERVER_SHUTDOWN_TIMEOUT']
			? Number(process.env['SERVER_SHUTDOWN_TIMEOUT'])
			: 3000,
	},
	redis: {
		port: process.env['REDIS_PORT_MAIN'] ? Number(process.env['REDIS_PORT']) : 6379,
		host: process.env['REDIS_HOST'] ? process.env['REDIS_HOST'] : 'localhost',
		shutdownTimeout: process.env['SERVER_SHUTDOWN_TIMEOUT']
			? Number(process.env['SERVER_SHUTDOWN_TIMEOUT'])
			: 3000,
	},
	debug: process.env['DEBUG'] === 'true' ? true : false,
	development: process.env['NODE_ENV'] === 'development' ? true : false,
	test: process.env['NODE_ENV'] === 'test' ? true : false,
	production: process.env['NODE_ENV'] === 'production' ? true : false,
}