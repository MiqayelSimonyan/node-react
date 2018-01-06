const Koa = require('koa');
const Router = require('koa-router');
const router = new Router();

router.post('/test1', (ctx, next) => {
	ctx.response.body = {
		data: {
			id: Math.floor(Math.random() * 10),
			text: `randomText ${Math.floor(Math.random() * 10)}`
		}
	}
});

router.post('/test2', (ctx, next) => {
	ctx.response.body = {
		data: {
			id: Math.floor(Math.random() * 10),
			text: `randomText ${Math.floor(Math.random() * 10)}`
		}
	}
});

module.exports = router;