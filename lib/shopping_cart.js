if(Meteor.isClient){


  //the cart relies on this global key, which could be a problem!
  //refactor as you see fit!
  userKey = localStorage.getItem("user_key");
  if(!userKey){
    userKey = Meteor.uuid();
    localStorage.setItem("user_key", userKey);
  }

  getCart = function(next){
    Meteor.call("getCart", next);
  };

  addToCart = function (_id, callback) {
    Meteor.call('addToCart',userKey, _id, callback);
  };
  removeFromCart = function (_id, callback) {
    Meteor.call('removeFromCart',userKey, _id, callback);
  };
  updateCart = function (_id, quantity, callback) {
    Meteor.call('updateCart', userKey, _id, quantity, callback);
  };
}

if(Meteor.isServer){
  Meteor.methods({
    //getcart
    getCart : function(userKey){
      return Carts.getCart(userKey);
    },
    updateCart : function(userKey,_id, quantity){
      var cart = Meteor.call("getCart", userKey);
      //only update the quantity here
      _.each(cart.items, function(item){
        if(item._id === _id){
          item.quantity = quantity;
          return Meteor.call("saveCart", cart);
        }
      });
    },
    //addToCart
    addToCart : function(userKey, _id){
      var cart = Meteor.call("getCart", userKey);
      //get the item in the cart
      var found = _.find(cart.items, function(item){
        return item._id === _id;
      });

      if(found){
        found.quantity++;
      }else{
        //add the item
        var product = Products.byID(_id);
        var item = {
          _id : product._id,
          name : product.name,
          price : product.price,
          description : product.summary,
          image : product.image,
          discount : 0,
          added_at : new Date(),
          quantity : 1
        };
        cart.items.push(item);

      }
      cart.notes.push({
        note : _id + " added to cart",
        created_at : new Date()
      });
      //save it
      Meteor.call("saveCart", cart);
      return cart;
    },
    //removeFromCart
    removeFromCart : function(userKey, _id){
      var cart = Meteor.call("getCart", userKey);
      //get the item in the cart

      var found = _.find(cart.items, function(item){
        return item._id === _id;
      });

      if(found){
        var foundIndex = cart.items.indexOf(found);
        cart.items.splice(foundIndex,1);
        cart.notes.push({
          note : _id + " removed from cart",
          created_at : new Date()
        });
        Meteor.call("saveCart", cart);
      }

      return cart;
    },

    saveCart : function(cart){
      cart.updated_at = new Date();
      cart.total = 0;
      var counter = 0;
      _.each(cart.items, function(item){
        item.lineTotal = (item.price - item.discount) * item.quantity;
        cart.total+=item.lineTotal;
        counter++;
      });
      cart.itemCount = counter;
      Carts.update({userKey : cart.userKey}, cart, {upsert : true});
      return cart;
    },

    emptyCart : function(userKey){
      Carts.remove({userKey : userKey});
    }
  });
}