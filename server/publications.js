
Meteor.publish("vendors", function(){
  return Vendors.find();
});

Meteor.publish("products-by-vendor", function(slug){
  return Products.find({_id : slug})
});

Meteor.publish("artist-data", function() {
	return Meteor.users.find({_id: this.userId})
});

Meteor.publish("products-by-id", function(_id){
  check(_id, Match.OneOf(String, undefined));
  return Products.find({_id : _id});
});

Meteor.publish('allProducts', function() {
  return Products.find();
});

Meteor.publish("cart", function(key){
  check(key, String);
  return Carts.find({userKey : key});
});