const { brands } = require('./brands');
const { models } = require('./models');

module.exports = {
  brands,
  models
}



// 1st brands is what it will be referred to in app.js
// 2nd brands is the const above
// 3rd brands is the anon. fxn. in brands.js
// module.exports = {
//   brands: brands.brands,
//   models: models.models
// }
