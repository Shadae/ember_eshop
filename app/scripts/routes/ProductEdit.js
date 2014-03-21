App.ProductEditRoute = Ember.Route.extend({
  actions: {
    saveProduct: function (product) {
      product.save();
      alert("Your DIY has been saved!");
      this.transitionTo('admin');
    },

    deleteProduct: function(product) {
      alert("Are you sure? :(");
      product.deleteRecord();
      product.save();
      alert("This DIY has been deleted!");
      this.transitionTo('admin');
    }
  },
  model: function (params) {
    return this.store.find("product", params.product_id);
  }
});