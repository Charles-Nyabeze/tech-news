const {format_date} = require('../utils/helper');
const {format_plural} = require('../utils/helper')
const {format_url} = require('../utils/helper')

test('format date() returs a string', () => {
    const date = new Date('2022-02-26 18:19:20')

    expect(format_date(date)).toBe('2/26/2022')
})

test('format_plural() returns a pluralized word', () => {
    const word = format_plural('tiger', 1);
    const word1 = format_plural('lion', 2);
  
    expect(word).toBe('tiger');
    expect(word1).toBe('lions');
  });

  test('format_url() returns a simplified url string', () => {
    const url1 = format_url('http://test.com/page/1');
    const url2 = format_url('https://www.coolstuff.com/abcdefg/');
    const url3 = format_url('https://www.google.com?q=hello');
  
    expect(url1).toBe('test.com');
    expect(url2).toBe('coolstuff.com');
    expect(url3).toBe('google.com');
  })