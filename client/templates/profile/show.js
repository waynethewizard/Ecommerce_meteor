Template.profile.info = function(){
		var userId = this.userId;
		var products = Products.find({userId : userId});
		var price = products.price;
	return {
		price:price
	}
};