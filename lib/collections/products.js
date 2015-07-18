Products = new Mongo.Collection("products");



Products.featured = function(){
	var featuredSkus = ["honeymoon"];
	return Products.find({sku : {$in : featuredSkus}});
};

