Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound'
});

Router.route("/", {
	name: "homeIndex",
	data: function () {
		return {
			message : "Welcome to Pet Portrait Club"
		}
	}
});

Router.route("/about", {
	name: "homeAbout"
});

Router.route('/contact', {
	name: "homeContact"
})

Router.route("/vendors/:slug", {
	name : "vendorsShow",
	data : function() {
		return Vendors.findOne({slug : this.params.slug});
	}
});

Router.route("/cart", {
	name : "cartShow"
})

Router.route("/checkout", {
	name : "checkoutShow"
})

Router.route('/profile', {
	name: 'profileShow',
	data: function() { return Meteor.users.findOne(this.params._id);}
});

Router.route('/profile/edit', {
	name: 'profileEdit',
	data: function() { return Meteor.users.findOne(this.params._id);}
});

Router.map(function() {
	this.route('productsList', {path: '/products'});

	this.route('productShow', {
		path: '/products/:_id',
		data: function() { return
Posts.findOne(this.params._id); }
	});

	this.route('productSubmit', {
		path: '/submit'
	});
});

Router.onBeforeAction('loading');
