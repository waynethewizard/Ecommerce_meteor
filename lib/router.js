Router.configure({
  layoutTemplate : 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
    waitOn : function(){
      Meteor.subscribe("cart", userKey);
  }
});

Router.route("/", {
  name : "homeIndex",
  waitOn : function(){
  	return Meteor.subscribe("products-by-id");
  },
  fastRender: true
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

Router.route("/portraits/:_id", {
  name : "productShow",
  waitOn : function(){
    return Meteor.subscribe("products-by-id", this.params._id);
  },
  data : function(){
    return Products.findOne({_id : this.params._id});
  }
});

Router.route("/artist/:slug", {
  name : "vendorsShow",
  waitOn : function(){
    return Meteor.subscribe("products-by-vendor", this.params.slug);
    return Meteor.subscribe("artist-data", this.params._id);
  },
  data : function(){
    return Vendors.findOne({slug : this.params.slug});
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

Router.route('/profile', {
	name: 'profileShow',
	data: function() { return Meteor.users.findOne(this.params._id);}
});

Router.route('/profile/edit', {
	name: 'profileEdit',
	data: function() { return Meteor.users.findOne(this.params._id);}
});

Router.route('/submit', {
		name: 'productSubmit',
  	data : function(){
  		return Products.findOne({sku : this.params.sku});
	}
});


