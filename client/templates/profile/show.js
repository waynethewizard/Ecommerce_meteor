Template.profileShow.events({
  'submit form': function(event) {
        event.preventDefault();
        var data = SimpleForm.processForm(event.target);
	Meteor.users.update(Meteor.userId(), {$set: {profile: data}});
  }
});