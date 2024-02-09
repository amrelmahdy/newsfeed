import { getArticleIndexFromDeepList } from './utils';

describe('getArticleIndexFromDeepList', () => {
  test('returns the last part of the URL', () => {
    const url = 'https://example.com/articles/1';
    expect(getArticleIndexFromDeepList(url)).toBe(1);
  });

  test('works with URLs ending with a slash', () => {
    const url = 'https://example.com/articles/1/';
    expect(getArticleIndexFromDeepList(url)).toBe(1);
  });

  test('returns 0 for empty URL', () => {
    const url = '';
    expect(getArticleIndexFromDeepList(url)).toBe(0);
  });

  test('returns 0 for URLs without dynamic index', () => {
    const url = 'https://example.com';
    expect(getArticleIndexFromDeepList(url)).toBe(0);
  });
});
