import { Birthday } from './../src/super-galactic-calculator.js';

describe('Birthday', function() {
  it('should test to make sure constructor is getting right values', function() {
    var birthday = new Birthday(03,12,2015);
    expect(birthday.month).toEqual(03);
    expect(birthday.day).toEqual(12);
    expect(birthday.year).not.toEqual(2014);

    //Test content will go here.
  });
});
