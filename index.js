var Worker = require("tiny-worker"),
	axios = require("axios"),
	mongoose = require("mongoose"),
	User = require("./model/db.js"),
	Schema = mongoose.Schema;

mongoose.connect(require("./config").url);

var i = 0;
function create() {
	setTimeout(function() {
		i++;

		axios.post("https://uinames.com/api/?ext")
		.then(function(r) {
			var u = new User({
				"Name": r.data["name"],
				"EmailAddress": r.data["email"],
				"OfficePhone": r.data["phone"]
			});
			u.save(function() {
				if (i >= (process.argv[2])) {
					setTimeout(function() {
						process.exit();
					}, 3000);
					
				}
			});
			console.log(i + "\t\tDone.");
		})
		.catch(function(e) {
			return console.log(e);
		});

		if (i < process.argv[2]) {
			return create();
		}
	}, 3000);
}


var worker = new Worker(function () {
	self.onmessage = function (ev) {
		postMessage(ev.data);
	};
});

worker.onmessage = function (ev) {
	console.log("Item\t\tStatus");
	create();

	worker.terminate();
};

worker.postMessage("Start");