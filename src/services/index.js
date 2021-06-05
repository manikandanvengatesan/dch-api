const users = require('./users/users.service.js');
const forms = require('./forms/forms.service.js');
const contents = require('./contents/contents.service.js');
const relations = require('./relations/relations.service.js');
const relationalContents = require('./relational-contents/relational-contents.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(forms);
  app.configure(contents);
  app.configure(relations);
  app.configure(relationalContents);
};
