Template.vendorsShow.helpers({
  products : function(){
    return Products.find({_id : this._id});
  }
});