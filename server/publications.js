
Meteor.publish("vendors", function(){
  return Vendors.find();
});

Meteor.publish("artist-data", function() {
	return Meteor.users.find(), {
		fields: {
			'profile.name' : 1
		}};
});

Meteor.publish("products-by-id", function(userId){
  check(userId, Match.OneOf(String, undefined));
  return Products.find({_id : _id});
});

Meteor.publish('allProducts', function() {
  return Products.find();
});

Meteor.publish("cart", function(key){
  check(key, String);
  return Carts.find({userKey : key});
});