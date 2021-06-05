// Initializes the `contents` service on path `/contents`
const { Contents } = require('./contents.class');
const createModel = require('../../models/contents.model');
const hooks = require('./contents.hooks');
const customMiddleware = require('../../customMiddleware');
module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };
  // Initialize our service with any options it requires
  // app.use('/contents', new Contents(options, app), customMiddleware);
  app.use('/contents', new Contents(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('contents');

  service.hooks(hooks);
};
