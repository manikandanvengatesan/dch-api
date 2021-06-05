// Initializes the `relationalContents` service on path `/relational-contents`
const { RelationalContents } = require('./relational-contents.class');
const createModel = require('../../models/relational-contents.model');
const hooks = require('./relational-contents.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/relational-contents', new RelationalContents(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('relational-contents');

  service.hooks(hooks);
};
