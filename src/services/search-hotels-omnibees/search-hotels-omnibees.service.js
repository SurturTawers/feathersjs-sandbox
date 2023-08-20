// Initializes the `search-hotels-omnibees` service on path `/search-hotels-omnibees`
const { SearchHotelsOmnibees } = require('./search-hotels-omnibees.class');
const createModel = require('../../models/search-hotels-omnibees.model');
const hooks = require('./search-hotels-omnibees.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/search-hotels-omnibees', new SearchHotelsOmnibees(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('search-hotels-omnibees');

  service.hooks(hooks);
};
