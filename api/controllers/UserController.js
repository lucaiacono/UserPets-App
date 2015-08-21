/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	create: function (req, res) {
	
		var params = req.params.all();

		var name = 'Luca';
			
		User.create({name: name}).exec(function (err, user) {
			if(err) { console.log('user.create: ' + err); }
			user.save(function(err, user) {
				if(err) {console.log('user.save: ' + err); 	}
			});
			res.json(user);
		});
		
	}
};

