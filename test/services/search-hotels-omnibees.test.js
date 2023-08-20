const assert = require('assert');
const app = require('../../src/app');

describe('\'search-hotels-omnibees\' service', () => {
  it('registered the service', () => {
    const service = app.service('search-hotels-omnibees');

    assert.ok(service, 'Registered the service');
  });
});
