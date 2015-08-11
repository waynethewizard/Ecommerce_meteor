Template.homeIndex.helpers({
	featured : function() {
		return Products.featured();
	}
});

Template.homeIndex.rendered = function() {
  return new WOW().init();
};