const { v4: uuidv4 } = require('uuid');
const forum = require('../modules/forum');
const marked = require('../modules/markdown');
const fs = require('fs');
const path = require('path');

exports.getRules = async (req, res) => {
    const categories = await forum.getCategoriesList();

	const p = path.resolve('./static/rules.md');

	if(fs.existsSync(p)){
		const markdown = fs.readFileSync(p, 'utf-8');

		res.render('layouts/static', {
			title: 'Rules Page',
			page: 'rules',
			uniqid: uuidv4,
			styles: [
				'static',
				'markdown'
			],
			meta: {
				description: 'Ethernaught Network Packet Analyser.',
				keywords: 'network packet sniffer packet',
				path: '/rules'
			},
			categories,
			header: 'Rules',
			data: marked.parse(markdown)
		});
		res.end();
		return;
	}

	//this.getError(req, res, 404);
};
