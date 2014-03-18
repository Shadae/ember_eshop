App.ConfirmationRoute = Ember.Route.extend({
  model: function (params) {
    return this.store.find("checkout", params.checkout_id);
  }
});