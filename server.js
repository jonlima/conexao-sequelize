var express = require('express');
var load = require('express-load');
var app = express();
var dotenv = require('dotenv');

dotenv.load();

load('config')
	.then('models/index.js')
	.into(app, function(err, instance){
		if (err) throw err;

		var sequelize = app.models.index.sequelize;

		sequelize.sync().done(function(){
			app.listen(3000, function(){
				console.log("Server running !");
			});
		});

	});