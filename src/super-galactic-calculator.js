 class  User {
  constructor(year,month,day,lifeExpectancy){
    this.year = year;
    this.month = month;
    this.day = day;
    this.lifeExpectancy = lifeExpectancy;

  }
   getAge(){
    let today = new Date();
    let birthday = new Date(this.year,this.month,this.day);
      let age = today - birthday;
      age = age / 31536000000;
       age =  Math.floor(age);
      return age;
  }

  getAgeMercury(){
    let today = new Date();
    let birthday = new Date(this.year,this.month,this.day);
    let age = today - birthday;
    age = age / 31536000000;
    return Math.floor(age * .24);
  }

  getAgeVenus(){
    let today = new Date();
    let birthday = new Date(this.year,this.month,this.day);
    let age = today - birthday;
    age = age / 31536000000;
    return Math.floor(age * .62);
  }

  getAgeMars(){
    let today = new Date();
    let birthday = new Date(this.year,this.month,this.day);
    let age = today - birthday;
    age = age / 31536000000;
    return Math.floor(age * 1.88);
  }

  getAgeJupiter(){
    let today = new Date();
    let birthday = new Date(this.year,this.month,this.day);
    let age = today - birthday;
    age = age / 31536000000;
    return Math.floor(age * 11.86);
  }
}
  // mercYearsLeft(age,lifeExpectancy){
  //
  // }

}
