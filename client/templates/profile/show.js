Meteor.subscribe("artist-data");
Meteor.subscribe("products-by-id", this._id);

Template.profile.helpers({
  products : function(){
    return Products.find();
  }
});
