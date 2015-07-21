Template.productSubmit.events({
	'submit form': function(e) {
		e.preventDefault();

		var product = {
			sku: 
$(e.target).find('[name=sku]').val(),
			name: $(e.target).find('[name=name]').val(),
			image: $(e.target).find('[name=image]').val(),
			style: $(e.target).find('[name=style]').val(),
			description: $(e.target).find('[name=description]').val(),
			price: $(e.target).find('[name=price]').val(),
			inventory: $(e.target).find('[name=inventory]').val(),
			status: $(e.target).find('[name=status]').val()
		}

		product._id = Products.insert(product);
		Router.go('productShow', product);
	}
});