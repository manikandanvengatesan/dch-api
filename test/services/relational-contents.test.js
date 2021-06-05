const assert = require('assert');
const app = require('../../src/app');

describe('\'relationalContents\' service', () => {
  it('registered the service', () => {
    const service = app.service('relational-contents');

    assert.ok(service, 'Registered the service');
  });
});
