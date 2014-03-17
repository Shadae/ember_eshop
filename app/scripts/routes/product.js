App.ProductRoute = Ember.Route.extend({
  actions: {
    addToCart: function (product) {
      var cart = this.modelFor("application")
      var store = this.store
        var item = store.createRecord("item", {
          quantity: 1,
          price: product.get("price"),
          product: product,
          cart: cart
        });
        cart.get("items").then(function(items) {
          items.pushObject(item);
        })
        item.save();
      this.transitionTo("cart")
    }
  },
  model: function (params) {
    return this.store.find("product", params.product_id)
  },
});