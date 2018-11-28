module.exports = {
	apps: [{
		name: 'shakieveggie',
		script: './app.js',
		env_production:{
			PORT: 3001,
			NODE_ENV: 'development'
		}
	}]
}
