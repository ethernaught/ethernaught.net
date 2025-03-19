const express = require('express');
const http = require('http');
const fs = require('fs');
const useragent = require('express-useragent');
const rateLimit = require('express-rate-limit');
const session = require('express-session');
const cookies = require('cookie-parser');
const crypto = require('crypto');
const MongoStore = require('connect-mongo');
//global.mongo = require('./modules/mongo');
require('dotenv').config();

//const mainController = require('./controllers/main');

const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname+'/views');

app.use(express.static('./public'));

//global.mongo.connectDatabase();

/*
app.use(session({
	secret: process.env.SESSION_TOKEN,
	resave: false,
	saveUninitialized: true,
	store: MongoStore.create({
		client: global.mongo.getClient(),
		dbName: process.env.DB_DATABASE,
		collectionName: 'sessions',
		ttl: 14*24*60*60*1000
	}),
	cookie: {
		domain: '.'+process.env.DOMAIN,
		secure: false,
		maxAge: 24*60*60*1000
	}
}));
*/
app.use(cookies());
app.use(useragent.express());

app.use('/repo', express.static('./repo'));

app.get('*', (req, res) => {
	//mainController.getError(req, res, 404);
});

const server = http.createServer(app);

server.listen(80, () => {
	console.log(`${process.env.DOMAIN} started`);
});
