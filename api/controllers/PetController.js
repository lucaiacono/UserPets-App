/**
 * PetController
 *
 * @description :: Server-side logic for managing Pets
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	index: function (req, res) {
		var params = req.params.all();

		User.findOne({name: 'Luca'}).populate('pets').exec(function(err, user) {
			if(err) {
				console.log(err);
			}
			console.log('user: ' + user);
			console.log('user.pets: ' + user.pets);
			res.json(user.pets);
		  });
		  //res.json(user);
	},
	
	create: function (req, res) {
		var params = req.params.all();
		var name = params.name;
		
		User.findOne({name: 'Luca'}).exec(function  findOneCB(err, user) {
			if(err) {console.log('User.findOne: ' + err); }
			user.pets.add({name:'Oliver'});
			console.log('User.pets: ' + user.pets);
			user.save(function(err, user) {
					if(err) {console.log('user.save: ' + err); 	}
			});
			res.json(user);
		});
		
	},
};

