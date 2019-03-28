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


});
