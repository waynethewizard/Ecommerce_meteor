Router.configure({
  layoutTemplate : 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn : function(){
    return [Meteor.subscribe("userProfile"),
      Meteor.subscribe("cart", userKey)];
  }
});

Router.route("/", {
  name : "homeIndex"
});

Router.route("/about", {
  name : "homeAbout"
});

Router.route("/contact", {
  name : "homeContact"
});

Router.route("/portraits", {
  name : "productsList",
    waitOn:function(){
      return Meteor.subscribe("userProfile",this.params.username);
    },
    data:function(){
      return Meteor.subscribe("allProducts");
    },
  fastRender: true
});

Router.route("/portraits/:_id", {
  name : "productShow",
  waitOn : function(){
    return Meteor.subscribe("products-by-id", this.params._id);
  },
  data : function(){
    return Products.findOne({_id : this.params._id});
  }
});

Router.route("/artist/:username", {
    name:"profile",
    waitOn:function(){
        var username=this.params.username;
        return [ Meteor.subscribe("userProfile", username),
                Meteor.subscribe("products-by-id", username)];
    },
    data:function(){
        var username=this.params.username;
        return  [Meteor.users.find({username : username}),
                Products.find({username:username})];
      },

  fastRender: true
});


Router.route("/cart", {
  name : "cartShow"
});

Router.route("/checkout",{
  name: "checkoutShow"
});

Router.route("/receipt/:id", {
  name : "receiptShow",
  data : function(){
    return {id : this.params.id};
  }
});

Router.route('/submit', {
		name: 'productSubmit',
  	data : function(){
  		return Products.findOne({sku : this.params.sku});
	}
});

Router.route('/profile', {
  name: 'profileShow',
  data: function() { return Meteor.users.findOne(this.params._id);}
});

Router.route('/profile/edit', {
  name: 'profileEdit',
  data: function() { return Meteor.users.findOne(this.params._id);}
});
