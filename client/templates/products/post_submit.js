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
      size: $(e.target).find('[name=size]').val(),
      description: $(e.target).find('[name=description]').val(),
			image: $(e.target).find('[name=image]').val(),
			price: $(e.target).find('[name=price]').val(),
			inventory: $(e.target).find('[name=inventory]').val()
		}
    var errors = validateproduct(product);
    if (errors.title || errors.url)
      return Session.set('productSubmitErrors', errors);
    
    var imageUrl = Session.get('imageUrl');

    Meteor.call('productInsert', product, function(error, result) {
      // display the error to the user and abort
      if (error)
        return throwError(error.reason);
      
      // show this result but route anyway
      if (result.productExists)
        throwError('This link has already been producted');
      
      Session.set('imageUrl', null);

      Router.go('productShow', {_id: result._id});  
    });
  }
});

Template.productSubmit.rendered = function() {
  var widget = uploadcare.Widget('[role=uploadcare-uploader]');

  widget.onUploadComplete(function(fileInfo) {
    Session.set('imageUrl', fileInfo.originalUrl);
    console.log(fileInfo.uuid);
    console.log(fileInfo.originalUrl);
    console.log('imageURL');
  });
}
