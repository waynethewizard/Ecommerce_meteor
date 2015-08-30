Meteor.publish("allProducts", function() {
	return Products.find();
});

Meteor.publish("products-by-vendor", function(user){
  check(user, String);
  return Products.find({username : user})
});

Meteor.publish("products-by-sku", function(user){
  check(user, String);
  return Products.find({username : username});
});

Meteor.publish("cart", function(key){
  check(key, String);
  return Carts.find({userKey : key});
});

Meteor.publish("artist-data", function(){
	return Meteor.users.find({}, {
		fields : {
			'username' : 1,
			'profile.description' : 1,
			'profile.name' : 1,
			'profile.picture' : 1
		}
	});
});


