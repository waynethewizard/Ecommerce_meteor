
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

Template.profileShow.events({
  'submit form': function(event) {
        event.preventDefault();
        var data = SimpleForm.processForm(event.target);
	Meteor.users.update(Meteor.userId(), {$set: {profile: data}});
	Meteor.products.update(Meteor.userId(), {$set: {products: data}});
  }
});