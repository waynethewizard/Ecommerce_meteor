Products = new Mongo.Collection('products');

Products.byID = function(_id){
  return Products.findOne({_id : _id});
};

Products.allow({
  update: function(userId, product) { return ownsDocument(userId, product); },
  remove: function(userId, product) { return ownsDocument(userId, product); },
});

Products.deny({
  update: function(userId, product, fieldNames) {
    // may only edit the following two fields:
    return (_.without(fieldNames, 'name', 'style').length > 0);
  }
});

Products.deny({
  update: function(userId, product, fieldNames, modifier) {
    var errors = validateproduct(modifier.$set);
    return errors.name || errors.style;
  }
});

validateproduct = function (product) {
  var errors = {};

  if (!product.name)
    errors.name = "Please fill in a name";
  
  if (!product.style)
    errors.style =  "Please fill in a style";

  return errors;
}

Meteor.methods({
  productInsert: function(productAttributes) {
    check(this.userId, String);
     
    var user = Meteor.user();
    var product = _.extend(productAttributes, {
      userId: user._id, 
      author: user.username
    });
    
    var productId = Products.insert(product);
    
    return {
      _id: productId
    };
  }
});