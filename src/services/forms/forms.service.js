// Initializes the `forms` service on path `/forms`
const { Forms } = require('./forms.class');
const createModel = require('../../models/forms.model');
const hooks = require('./forms.hooks');
const customMiddleware = require('../../customMiddleware');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  // app.use('/forms', new Forms(options, app), customMiddleware);
  app.use('/forms', new Forms(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('forms');

  service.hooks(hooks);
};
