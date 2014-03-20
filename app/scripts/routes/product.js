App.ProductRoute = Ember.Route.extend({
  actions: {
    addToCart: function (product){
      // find the cart
      // var cart = this.modelFor("application");
      var store = this.store;
      // get the carts items
      var cart = this.modelFor("application");
      cart.get("items").then( function (items) {
        // see if any product ids match products already added
        return items.find(function (item){
          return item.get("product").get("id") == product.get("id")
        });
      }).then(function (item){
        // if there is a match increment property and save
        if (item) {
          item.incrementProperty("quantity");
          item.save();
        } else {
          // else create a new item
          // push item into cart
          // save the item
          var item = store.createRecord("item", {cart: cart, product: product, quantity: 1, price: product.get("price")
        });
          cart.get("items").pushObject(item);
          item.save();
        }
      });
      this.transitionTo("cart")
    }
  },
  model: function (params) {
    return this.store.find("product", params.product_id)
  },
});