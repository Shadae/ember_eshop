App.Product = DS.Model.extend({
  name: DS.attr("string"),
  description: DS.attr("string"),
  image: DS.attr("string"),
  family: DS.attr("string")
})

App.Product.FIXTURES = [
  {
    id: 1,
    name: "DIY with your Dog",
    image: "http://www.studiodiy.com/wordpress/wp-content/uploads/2012/10/DIY-Dog-Pinata-Costume-600x399.jpg",
    avatar: "http://www.studiodiy.com/wordpress/wp-content/uploads/2012/10/DIY-Dog-Pinata-Costume-600x399.jpg",
    description: "Your puppy will love his new DIY outfit just in time for Cinco de Mayo",
    price: "$2.00"
  }, {
    id: 1,
    name: "DIY a Happy Birthday Banner",
    image: "http://media.brickyardbuffalo.com/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/h/i/hipfridaybanner3.jpg",
    avatar: "http://media.brickyardbuffalo.com/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/h/i/hipfridaybanner3.jpg",
    description: "A simple banner to make any birthday SPARKLE",
    price: "$1.00"
  },
]