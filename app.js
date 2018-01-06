const http = require('http');
const fs = require('fs');
const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const serve = require('koa-static');

const config = require('./config');
const messages = require('./test').messages;

const app = new Koa();
const router = new Router();

app.use(serve(__dirname + '/public/dist'));
app.use(bodyParser());

fs.readdirSync(__dirname + '/controllers').forEach(file => {
	if (file.match(/\.js$/) != null) {
		 app.use(require(__dirname + '/controllers/' + file).routes());
	}
});

const server = http.createServer(app.callback());
const io = require('socket.io')(server);

io.on('connection', socket => {	
	app.io = io;
	
	const randomMessageTimer = setInterval(() => {
		const randomMessage = messages[Math.floor(Math.random() * messages.length)];
		io.sockets.emit('message', randomMessage);
	}, 3000);

	socket.on('disconnect', () => {		
		clearInterval(randomMessageTimer);
        console.log(socket.id + ' disconnect');
    });
});

server.listen(config.port, config.host, function() {
	console.log(`server connected on port ${this.address().port}`);
});