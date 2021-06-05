// Initializes the `relations` service on path `/relations`
const { Relations } = require('./relations.class');
const createModel = require('../../models/relations.model');
const hooks = require('./relations.hooks');
const customMiddleware = require('../../customMiddleware');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  // app.use('/relations', new Relations(options, app),customMiddleware);
  app.use('/relations', new Relations(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('relations');

  service.hooks(hooks);
};
