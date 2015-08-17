Template.productShow.events({
  "click #add-to-cart" : function(ev){
    ev.preventDefault();
    addToCart(this._id, function(err,res){
      if(err){
        console.log(err);
      }else{
        Router.go("cartShow");
      }
    });
  }
});

Template.productsList.helpers({
  products: function() {
    return Products.find({});
  }
});

Template.productsList.events({
  "click #add-to-cart" : function(ev){
    ev.preventDefault();
    addToCart(this._id, function(err,res){
      if(err){
        console.log(err);
      }else{
        Router.go("cartShow");
      }
    });
  }
});
