Template.productSubmit.onCreated(function() {
  Session.set('productSubmitErrors', {});
});

Template.productSubmit.helpers({
  errorMessage: function(field) {
    return Session.get('productSubmitErrors')[field];
  },
  errorClass: function (field) {
    return !!Session.get('productSubmitErrors')[field] ? 'has-error' : '';
  }
});

Template.productSubmit.events({
  'submit form': function(e) {
    e.preventDefault();

		var product = {
			medium:   $(e.target).find('[name=medium]').val(),
      style: $(e.target).find('[name=style]').val(),
      size: $(e.target).find('[name=style]').val(),
      description: $(e.target).find('[name=description]').val(),
			image: $(e.target).find('[name=image]').val(),
			price: $(e.target).find('[name=price]').val(),
			inventory: $(e.target).find('[name=inventory]').val()
		}

    var errors = validateproduct(product);
    if (errors.title || errors.url)
      return Session.set('productSubmitErrors', errors);
    
    Meteor.call('productInsert', product, function(error, result) {
      // display the error to the user and abort
      if (error)
        return throwError(error.reason);
      
      // show this result but route anyway
      if (result.productExists)
        throwError('This link has already been producted');
      
      Router.go('productShow', {_id: result._id});  
    });
  }
});


Template.productSubmit.events({
    "click button.upload": function(){
        var files = $("input.file_bag")[0].files

        S3.upload({
                files:files,
                path:"subfolder"
            },function(e,r){
                console.log(r);
        });
    }
})

Template.productSubmit.helpers({
    "files": function(){
        return S3.collection.find();
    }
})