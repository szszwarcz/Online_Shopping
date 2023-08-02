import { BrewTime } from './brew-time';

describe('BrewTime', () => {
  it('should create an instance', () => {
    expect(new BrewTime(3,45)).toBeTruthy();
  });
});
