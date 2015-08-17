ProfileController=RouteController.extend({
    template:"profile",
    waitOn:function(){
        return Meteor.subscribe("userProfile",this.params.username);
        return Meteor.subsribe("allProducts");
    },
    data:function(){
        var username=Router.current().params.username;
        return Meteor.users.findOne({username:username});
        return Products.find({username:username});
    }
});