/**
 * This script automatically creates a default Admin user when an
 * empty database is used for the first time. You can use this
 * technique to insert data into any List you have defined.
 *
 * Alternatively, you can export a custom function for the update:
 * module.exports = function(done) { ... }
 */

exports.create = {
	Contributor: [
		{ 'name.first': 'Admin', 'name.last': 'Contributor', 'email': 'danielproctor@web.de', 'password': 'ch4ng3m3', 'isAdmin': true },
	],
};

/*

// This is the long-hand version of the functionality above:

var keystone = require('keystone');
var async = require('async');
var Contributor = keystone.list('Contributor');

var admins = [
	{ email: 'user@keystonejs.com', password: 'admin', name: { first: 'Admin', last: 'Contributor' } }
];

function createAdmin (admin, done) {

	var newAdmin = new Contributor.model(admin);

	newAdmin.isAdmin = true;
	newAdmin.save(function (err) {
		if (err) {
			console.error('Error adding admin ' + admin.email + ' to the database:');
			console.error(err);
		} else {
			console.log('Added admin ' + admin.email + ' to the database.');
		}
		done(err);
	});

}

exports = module.exports = function (done) {
	async.forEach(admins, createAdmin, done);
};

*/
