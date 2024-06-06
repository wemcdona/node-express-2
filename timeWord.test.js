const timeWord = require('./timeWord');

describe('#timeWord', () => {
  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });

  test('it converts 00:00 to midnight', () => {
    expect(timeWord('00:00')).toBe('midnight');
  });

  test('it converts 00:12 to twelve twelve am', () => {
    expect(timeWord('00:12')).toBe('twelve twelve am');
  });

  test('it converts 01:00 to one o\'clock am', () => {
    expect(timeWord('01:00')).toBe('one o\'clock am');
  });

  test('it converts 06:01 to six oh one am', () => {
    expect(timeWord('06:01')).toBe('six oh one am');
  });

  test('it converts 06:10 to six ten am', () => {
    expect(timeWord('06:10')).toBe('six ten am');
  });

  test('it converts 06:18 to six eighteen am', () => {
    expect(timeWord('06:18')).toBe('six eighteen am');
  });

  test('it converts 06:30 to six thirty am', () => {
    expect(timeWord('06:30')).toBe('six thirty am');
  });
});
