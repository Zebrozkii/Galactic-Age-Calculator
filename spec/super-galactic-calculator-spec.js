import User from "../src/super-galactic-calculator.js";

describe('User', function(){
  it('should test to make sure constructor is working', function(){
  let birthday = new User("1995","04","01","0");
    expect(birthday.year).toEqual("1995");
  });

  it('should test to make sure its returning the right month', function(){
    let birthday = new User("1995","04","01","0");
    expect(birthday.month).toEqual("04");
  });
  it('should test to make sure its returning the right day', function(){
    let birthday = new User("1995","04","01","0");
    expect(birthday.day).toEqual("01");
  });
  it('should test to make sure its returning the right age', function(){
    let birthday = new User("1995","04","01","0");
    expect(birthday.age).toEqual(23);
  });
  it('should test to make sure its returning Mercury age', function(){
    let birthday = new User("1995","04","01","0");
    expect(birthday.getAgeMercury()).toEqual(5);
  });
  it('should test to make sure its returning Venus age', function(){
    let birthday = new User("1995","04","01","0");
    expect(birthday.getAgeVenus()).toEqual(14);
  });
  it('should test to make sure its returning Mars age', function(){
    let birthday = new User("1995","04","01","0");
    expect(birthday.getAgeMars()).toEqual(43);
  });
  it('should test to make sure its returning Mars age', function(){
    let birthday = new User("1995","04","01","0");
    expect(birthday.getAgeJupiter()).toEqual(272);
  });
  it('should test to make sure its returning mercury years left', function(){
    let birthday = new User("1995","04","01","80");
    expect(birthday.mercYearsLeft()).toEqual("you still have 14 years to live on mercury ");
  });
  it('should test to make sure its returning venus  years left', function(){
    let birthday = new User("1995","04","01","80");
    expect(birthday.venYearsLeft()).toEqual("you still have 35 years to live on Venus ");
  });
  it('should test to make sure its returning mars years left', function(){
    let birthday = new User("1995","04","01","80");
    expect(birthday.marYearsLeft()).toEqual("you still have 107 years to live on Mars ");
  });
  it('should test to make sure its returning Jupiter years left', function(){
    let birthday = new User("1995","04","01","80");
    expect(birthday.jupYearsLeft()).toEqual("you still have 676 years to live on Jupiter ");
  });

});
