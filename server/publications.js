Meteor.publish("artist-data", function(){
	return Meteor.users.find();
});

Meteor.publish('allProducts', function() {
  return Products.find();
});

Meteor.publish("products-by-id", function(username){
    return Products.find({username:username});
});


Meteor.publish("userProfile",function(username){
    // simulate network latency by sleeping 2s
    Meteor._sleepForMs(2000);
    // try to find the user by username
    var user=Meteor.users.findOne({
        username:username
    });
    // if we can't find it, mark the subscription as ready and quit
    if(!user){
        this.ready();
        return;
    }
    // if the user we want to display the profile is the currently logged in user...
    if(this.userId==user._id){
        // then we return the corresponding full document via a cursor
        return Meteor.users.find(this.userId);
    }
    else{
        // if we are viewing only the public part, strip the "profile"
        // property from the fetched document, you might want to
        // set only a nested property of the profile as private
        // instead of the whole property
        return Meteor.users.find(user._id,{
            fields:{
                "profile.name": 1,
                "profile.description" : 1,
                "_id" : 1,
                "username" : 1,
                "profile.username" : 1
            }
        });
    }
});


Meteor.publish("cart", function(key){
  check(key, String);
  return Carts.find({userKey : key});
});








