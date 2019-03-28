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
    age = age * .24;
    return Math.round(age);
  }
}
  // getAgeVenus(age){
  //   this.age = age * .62;
  //   return Math.round(age);
  // }
  // getAgeMars(age){
  //   this.age = age * 1.88;
  //   return Math.round(age);
  // }
  // getAgeJupiter(age){
  // this.age = age * 11.86;
  //   return Math.round(age);
  // }
  // mercYearsLeft(age,lifeExpectancy){
  //
  // }

}
