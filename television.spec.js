const Television = require('./television');

describe('Television Class Test', () => {
  let dumbTV = new Television('SHARP');

  beforeEach(() => {
    dumbTV.initTV();
  })

  it('should have default properties (brand, volume and channel)', () => {
    expect(dumbTV.brand).toBe('SHARP');
    expect(dumbTV.volume).toBe(50);
    expect(dumbTV.channel).toBe(1);
  });

  it('should have a volume up method', () => {
    expect(dumbTV.volUp).toBeDefined();
  })

  it('should increase volume when volUp method is called', () => {
    expect(dumbTV.volume).toBe(50);
    dumbTV.volUp();

    expect(dumbTV.volume).toBe(51);
  });

  it('should not increase volume over 100', () => {
    expect(dumbTV.volume).toBe(50);
    
    for (i = 50; i < 200; i++) {
      dumbTV.volUp();
    };

    expect(dumbTV.volume).toBe(100);
  });

  it('should have a volume down method', () => {
    expect(dumbTV.volDown).toBeDefined();
  })

  it('should decrease volume when volDown method is called', () => {
    expect(dumbTV.volume).toBe(50);
    dumbTV.volDown();

    expect(dumbTV.volume).toBe(49);
  });

  it('should not increase volume under 0', () => {
    expect(dumbTV.volume).toBe(50);
    
    for (i = 50; i > -100; i--) {
      dumbTV.volDown();
    };

    expect(dumbTV.volume).toBe(0);
  });

});