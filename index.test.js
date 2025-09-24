const { slugify, capitalize, camelCase, titleCase } = require('./index');

describe('slugify', () => {
  test('converts string to URL-friendly slug', () => {
    expect(slugify('Hello World!')).toBe('hello-world');
    expect(slugify('This is a test')).toBe('this-is-a-test');
    expect(slugify('Special@#$%Characters')).toBe('specialcharacters');
    expect(slugify('  Trim  spaces  ')).toBe('trim-spaces');
  });
});

describe('capitalize', () => {
  test('capitalizes first letter of string', () => {
    expect(capitalize('hello world')).toBe('Hello world');
    expect(capitalize('already Capitalized')).toBe('Already Capitalized');
    expect(capitalize('')).toBe('');
    expect(capitalize(null)).toBe('');
  });
});

describe('camelCase', () => {
  test('converts string to camelCase', () => {
    expect(camelCase('hello world')).toBe('helloWorld');
    expect(camelCase('foo-bar')).toBe('foobar');
    expect(camelCase('snake_case_string')).toBe('snakecasestring');
    expect(camelCase('Already camelCase')).toBe('alreadyCamelcase');
  });
});

describe('titleCase', () => {
  test('converts string to titleCase', () => {
    expect(titleCase('hello world')).toBe('Hello World');
    expect(titleCase('foo-bar')).toBe('Foobar');
    expect(titleCase('snake_case_string')).toBe('Snakecasestring');
    expect(titleCase('Already camelCase')).toBe('Already Camelcase');
  });
});

