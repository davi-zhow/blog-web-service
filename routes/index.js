const user = require('./users')
module.exports = function (app) {
	app.use(user);
	app.get('/', function (req, res) {
		res.render('index.html', {
			title: '玉瑾小阁'
		})
	})
	app.get('/index.html', function (req, res) {
		res.render('index.html', {
			title: '玉瑾小阁'
		})
	})
};