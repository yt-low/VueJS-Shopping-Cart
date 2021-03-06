/**
 * Mocking client-server processing
 */
import ProductListAPI from '@/api/product_list.json'

/*
const _products = [
  {"id": 1, "title": "iPad 4 Mini", "price": 500.01, "inventory": 4, "image": "https://images.kogan.com/image/fetch/s--PYK8gQDP--/b_white,c_pad,f_auto,h_400,q_auto:good,w_600/https://assets.kogan.com/files/product/KHIP6xxxxx/KHIP6xxGLD-webres.jpg", "details": {"Specification": "1x battery charger, earphone, screen protector", "Notes": "No warranty"}},
  {"id": 2, "title": "H&M T-Shirt White", "price": 10.99, "inventory": 10, "image": "http://cdn.shopify.com/s/files/1/0232/3963/products/white-t-shirt-man_grande.jpg?v=1441607322", "details": {"Specification": "A storage box 4x4"}},
  {"id": 3, "title": "Taylor Swift CD", "price": 19.99, "inventory": 5, "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUi8rYepirI0LQ-DrfrkZRtgfKWSJoHr95W7ZggBTl8lTrC9ns", "details": {"Specification": "Contains 1 Autograpgh, Hardcover"}},
  {"id": 4, "title": "Smasung Galaxy", "price": 19.99, "inventory": 5, "image": "https://d11fuji4mn7bm2.cloudfront.net/media/cache/data/Samsung/Galaxy-Note-8/Samsung-Galaxy-Note-8-Front-Gold-800x800.jpg", "details": {"Specification": "Contains warranty card, Screen Protector"}},
]
*/

export default {
  getProducts (cb) {
    setTimeout(() => cb(ProductListAPI), 200)
  },

  buyProducts (products, cb, errorCb) {
    setTimeout(() => {
      // simulate random checkout failure.
      (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
        ? cb()
        : errorCb()
    }, 100)
  }
}