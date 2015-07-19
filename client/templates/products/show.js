Template.productsShow.events({
	"click #add-to-cart" : function(ev){
		ev.preventDefault();
		addToCart(this.sku, function(err, res){
			Router.go("cartShow");
		});
	}
});