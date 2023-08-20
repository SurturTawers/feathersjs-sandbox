const users = require('./users/users.service.js')
const searchHotelsOmnibees = require('./search-hotels-omnibees/search-hotels-omnibees.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users)
  app.configure(searchHotelsOmnibees);
}
