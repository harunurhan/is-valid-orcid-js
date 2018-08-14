import isValidOrcid from './index';

describe('isValidOrcid', () => {
  it('returns false if it has less than 19 chars', () => {
    const value = '0000-0001-5109-370';
    expect(isValidOrcid(value)).toBe(false);
  });

  it('returns false if it does not have 16 chars after removing dashes', () => {
    const value = '0000-0001-5109-370-';
    expect(isValidOrcid(value)).toBe(false);
  });

  it('returns false if invalid orcid', () => {
    const value = '0000-0002-0088-0052';
    expect(isValidOrcid(value)).toBe(false);
  });

  it('returns true if valid orcid without X', () => {
    const value = '0000-0001-5109-3700';
    expect(isValidOrcid(value)).toBe(true);
  });

  it('returns true if valid orcid with X', () => {
    const value = '0000-0002-1694-233X';
    expect(isValidOrcid(value)).toBe(true);
  });
});
