App.CheckoutRoute = Ember.Route.extend({
  actions: {
    checkout:
      function(proxy) {
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
          });
        });
      });
      // function(error) {
      //   order.deleteRecord().then(function(error) {
      //     alert(error.responseText);
      //   })
      // });
      // function(error) {
      //   checkout.deleteRecord()
      //   alert(error.responseText);
      // })
    }
  },

  model: function() {
    return {};
  }
})