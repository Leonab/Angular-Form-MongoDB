var mongoose = require('mongoose'),
    user = require('./models/user')();
var User = mongoose.model('User');

module.exports = function (app) {



app.post('/api/users', function(req, res) {

		var name = req.body.name,
			address = req.body.address,
			email= req.body.email,
			phone= req.body.phone;
		console.log(req.body);
		var new_user = new User({name : name, address : address, email: email, phone: phone});
		// create, information comes from AJAX request from Angular
		new_user.save(function(err) {
            if (err)
                res.send(err);
			else
				res.send("success");

        });

    });

    // application -------------------------------------------------------------
    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
};
