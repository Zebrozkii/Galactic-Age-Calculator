  export default class  User {
  constructor(year,month,day,lifeExpectancy){
    this.year = year;
    this.month = month;
    this.day = day;
    this.lifeExpectancy = lifeExpectancy;
     let today = new Date();
     let birthday = new Date(this.year,this.month,this.day);
       let age = today - birthday;
       age = age / 31536000000;
        age =  Math.floor(age);
        this.age = age;
  }
  getAgeMercury(){
    return Math.floor(this.age * .24);
  }

  getAgeVenus(){
    return Math.floor(this.age * .62);
  }

  getAgeMars(){
    return Math.floor(this.age * 1.88);
  }

  getAgeJupiter(){
    return Math.floor(this.age * 11.86);
  }
}
  // mercYearsLeft(age,lifeExpectancy){
  //
  // }
