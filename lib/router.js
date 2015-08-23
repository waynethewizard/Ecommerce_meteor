Router.configure({
  layoutTemplate : 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn : function(){
    return [Meteor.subscribe("allProducts"),
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
  name : "productsList"
});

Router.route("/artist/:username", {
  name : "profile",
  data : function(){
    return [Products.find({}),
            Meteor.users.find({})];
  }
});

Router.route("/vendors/:username", {
  name : "vendorsShow",
  waitOn : function(){
    return Meteor.subscribe("products-by-vendor", this.params.username);
  },
  data : function(){
    return Meteor.users.findOne({username : this.params.username});
  }
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
