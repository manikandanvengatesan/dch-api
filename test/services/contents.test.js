const assert = require('assert');
const app = require('../../src/app');

describe('\'contents\' service', () => {
  it('registered the service', () => {
    const service = app.service('contents');

    assert.ok(service, 'Registered the service');
  });
});
