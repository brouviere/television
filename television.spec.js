const Television = require('./television');

describe('Television Class Test', () => {
  let dumbTV = new Television('SHARP');

  it('should have default properties (brand, volume and channel)', () => {
    expect(dumbTV.brand).toBe('SHARP');
    expect(dumbTV.volume).toBe(50);
    expect(dumbTV.channel).toBe(1);
  });

});