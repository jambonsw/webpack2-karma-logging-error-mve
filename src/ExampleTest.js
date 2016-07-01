/* globals describe it expect */

import aFunction from './main';

describe('An Example Test', () => {
  it('has a basic assert', () => {
    expect(aFunction()).toEqual(true);
  });
});
