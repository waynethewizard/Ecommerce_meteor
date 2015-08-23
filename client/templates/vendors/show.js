Template.vendorsShow.helpers({
  products: function() {
    return [Products.find({userId: this.params._id}),
    	   Meteor.users.findOne({_id : this.params._id})];
  }
})