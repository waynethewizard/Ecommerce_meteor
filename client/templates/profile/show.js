Meteor.subscribe("artist-data");
Meteor.subscribe("userProfile");
Meteor.subscribe("products-by-id");

Template.profile.helpers({
  products : function(){
    return Products.find();
  }
});

Template.profile.helpers({
  artist : function(){
    return Meteor.users.find();
  }
});