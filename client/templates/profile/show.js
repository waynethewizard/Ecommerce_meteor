
Meteor.subscribe("artist-data");

Template.profile.helpers({
  products: function() {
    return Products.find({username : Router.current().params.username});
  }
});

Template.profile2.helpers({
  users : function() {
    return Meteor.users.find({username: Router.current().params.username});
  }
});
