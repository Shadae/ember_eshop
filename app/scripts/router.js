App.Router.map(function(){
  this.route("home", { path: "/" });
  this.resource("cart");
  this.resource("item");
  this.resource("checkout");
  this.resource("products", function () {
    this.resource("product", { path: ":product_id" });
  });
  this.resource("admin", function () {
    this.resource("productEdit", { path: ":product_id"});
    this.resource("productNew", {path: "products/new"} )
  });
});