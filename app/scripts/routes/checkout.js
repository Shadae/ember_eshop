App.CheckoutRoute = Ember.Route.extend({
  actions: {
    checkout: function(proxy) {
      var checkout = this.store.createRecord("checkout", proxy);
      var self = this;
      this.store.find('cart', localStorage.cartId).then(function(cart) {
        checkout.set('cart', cart)
        checkout.save().then(
          function (checkout){
            self.transitionTo("confirmation", checkout).then( function() {
              var cart = self.store.createRecord("cart");
              cart.save().then(function (cart) {
                localStorage.cartId = cart.id;
              });
            }),
            function(error) {
              alert('There was a problem processing your order')
            };
          }
        )
      });

    }
  },

  model: function() {
    return {};
  }
})