const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
//const middleware = require('../modules/middleware');
//const pow = require('../modules/pow');

exports.getHome = (req, res) => {
	res.render('layouts/home', {
		title: 'Ethernaught Page',
		page: 'home',
		uniqid: uuidv4,
		styles: [
			'home'
		],
		meta: {
			description: 'Ethernaught',
			keywords: '',
			path: '/'
		}
	});
};

async function renderError(req, res, type){
	let isMember = false;

	if(await middleware.isSignedIn(req, res.locals.config.token.secret)){
        if(middleware.getRole(req) > 0){
			isMember = true;
		}
	}

	res.render('layouts/errors/'+type, {
		title: type+' Page',
		page: 'error',
		uniqid: uuidv4,
		is_member: isMember
		//error: error
	});
}
