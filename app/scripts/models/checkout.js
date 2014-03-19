App.Checkout = DS.Model.extend({
  name:  DS.attr("string"),
  email:         DS.attr("string"),
  status:        DS.attr("string"),
  // creditcard:    DS.attr("string"),
  cvv:           DS.attr("string"),
  zip:           DS.attr("string"),
  expiration:       DS.attr("string"),
  cart:          DS.belongsTo("cart", {async: true})
});

// App.Order.FIXTURES = [
//   {
//     id: 1,
//     cart: 1
//   }
// ];