var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
	{
		name: "123",
		image: "https://pixabay.com/get/57e1dd4a4350a514f6da8c7dda793f7f1636dfe2564c704c732778dd9f4cc75a_340.jpg",
		description: "A campsite or camping pitch is a place used for overnight stay in an outdoor area. In UK English, a campsite is an area, usually divided into a number of pitches, where people can camp overnight using tents or camper vans or caravans; this UK English use of the word is synonymous with the US English expression campground. In American English, the term campsite generally means an area where an individual, family, group, or military unit can pitch a tent or park a camper; a campground may contain many campsites."
	},
	{	
		name: "456",
		image: "https://pixabay.com/get/57e0d6424b56ad14f6da8c7dda793f7f1636dfe2564c704c732778dd9f4cc75a_340.jpg",
	 	description: "A campsite or camping pitch is a place used for overnight stay in an outdoor area. In UK English, a campsite is an area, usually divided into a number of pitches, where people can camp overnight using tents or camper vans or caravans; this UK English use of the word is synonymous with the US English expression campground. In American English, the term campsite generally means an area where an individual, family, group, or military unit can pitch a tent or park a camper; a campground may contain many campsites."
	},
	{	
		name: "789",
		image: "https://pixabay.com/get/57e8d0424a5bae14f6da8c7dda793f7f1636dfe2564c704c732778dd9f4cc75a_340.jpg",
	 	description: "A campsite or camping pitch is a place used for overnight stay in an outdoor area. In UK English, a campsite is an area, usually divided into a number of pitches, where people can camp overnight using tents or camper vans or caravans; this UK English use of the word is synonymous with the US English expression campground. In American English, the term campsite generally means an area where an individual, family, group, or military unit can pitch a tent or park a camper; a campground may contain many campsites."
	}
]

function seedDB(){
	Campground.remove({}, function(err){
		// if(err) {
		// 	console.log(err);
		// }
		// console.log("remove campgrounds!");
		// Comment.remove({}, function(err){
		// 	if(err) {
		// 		console.log(err);
		// 	}
		// 	console.log("removed comments!");
		// 	data.forEach(function(seed) {
		// 		Campground.create(seed, function(err, campground){
		// 			if(err){
		// 				console.log(err);
		// 			} else {
		// 				console.log("added a campground");
		// 				Comment.create(
		// 					{
		// 						text: "This place is great",
		// 						author: "Homer"
		// 					}, function(err, comment){
		// 						if (err) {
		// 							console.log(err);
		// 						} else {
		// 							campground.comments.push(comment);
		// 							campground.save();
		// 							console.log("Created new comment");
		// 						}
		// 					});
		// 			}
		// 		});
		// 	});
		// });
	});
}

module.exports = seedDB;