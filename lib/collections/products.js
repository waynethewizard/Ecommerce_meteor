Products = [
	{
		"sku" : "illudum-q36",
		"name" : "Illudium whatever",
		"image" : "test1.jpg",
		"summary": "yada yada yada",
		"description": "At last, whatever whatever",
		"price": 200,
		"vendor": {
			"id": 1,
			"slug":"martian men",
			"name": "Martian Armanaments"
		}
},
{
		"sku": "honeymoon",
		"name": "Honeymoon on Mars",
		"image": "test3.jpg",
		"summary": "You should order this portrait right now",
		"description": "Come on, just order this <strong>right now</strong>. <h1>Right now</h2>",
		"price": 1500,
		"vendor": {
			"id": 2,
			"slug": "venus people",
			"name": "Veejays"
		}
}];

Products.featured = function(){
	var featuredSkus = ["honeymoon"];
	return _.filter(Products, function(product){
		return featuredSkus.indexOf(product.sku) > -1;
	});
};

Products.findOne = function(args){
	return _.find(Products, function(product){
		return product.sku === args.sku;
	})
}

