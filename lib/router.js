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

