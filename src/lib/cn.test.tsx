import { cn } from './cn';

/*
This is really only meant to show that the testing is working. The code this tests was created by
shadcn and so really doesn't need to be tested. It's just a simple wrapper around clsx and tailwind-merge
*/
describe('cn', () => {
  it('should return a merged string', () => {
    expect(cn('foo', 'bar')).toBe('foo bar');
  });

  it('should return string when passed an object', () => {
    expect(cn({ foo: true, bar: false, baz: true })).toBe('foo baz');
  });

  it('should return string when passed an array', () => {
    expect(cn(['foo', 'bar'])).toBe('foo bar');
  });

  it('should return string when passed a mix of objects and strings and arrays', () => {
    expect(cn('foo', { bar: true, baz: false }, ['chaz', 'daz'])).toBe('foo bar chaz daz');
  });

  it('should return string when passed an object which complex keys', () => {
    expect(cn({ 'asdf[test-1]': true, 'asdf[test-2]': false })).toBe('asdf[test-1]');
  });
});
