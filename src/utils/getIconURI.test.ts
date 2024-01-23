import { getIconURI } from './getIconURI';

describe('getIconURI', () => {
  it('should return correct uri', () => {
    const uri = getIconURI('test');

    expect(uri).toBe('https:test');
  })
})