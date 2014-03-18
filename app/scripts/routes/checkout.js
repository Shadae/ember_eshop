App.CheckoutRoute = Ember.Route.extend({
  actions: {
    checkout: function(proxy) {
      var checkout = this.store.createRecord("checkout", proxy);
      this.store.find('cart', localStorage.cartId).then(function(cart) {
        checkout.set('cart', cart)
      })

      checkout.save();
      this.transitionTo("confirmation", checkout);

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