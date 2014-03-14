App.CartRoute = Ember.Route.extend({
 actions: {
  more: function(item) {
    item.incrementProperty("quantity")
  },

  less: function(item) {
    this.store.find("cart", 1).then(function (cart){
      if (item.get('quantity') > 1){
      item.decrementProperty('quantity')
    } else {
      cart.get("items").then(function(items) {
        items.removeObject(item);
      });
      item.deleteRecord();
    }
   });
   }
  },

  model: function (params) {
    return this.store.find("cart", 1);
  }
});