const SmartTV = require('./smartTV');

describe('SMART TV test suite', () => {

  const smartTV = new SmartTV('SAMSUNG');

  beforeEach(() => {
    smartTV.initTV();
  });

  it('should have default application', () => {
    expect(smartTV.application).toBe('LiveTV');
  });

});