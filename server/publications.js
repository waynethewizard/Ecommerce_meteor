
Meteor.publish("vendors", function(){
  return Vendors.find();
});

Meteor.publish("products-by-vendor", function(slug){
  check(slug, String);
  return Products.find({"vendor.slug" : slug})
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