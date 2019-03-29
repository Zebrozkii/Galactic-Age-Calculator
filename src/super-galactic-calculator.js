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

  mercYearsLeft(){
    let mercAge = Math.floor(this.age * .24);
    let mercLife = Math.floor(this.lifeExpectancy * .24);
    if(mercAge>mercLife){
    let yearsPast = mercAge - mercLife;
    console.log(yearsPast);
      return "You are " + yearsPast + " years past your death on Mercury ";
    }
    else {
      let yearsLeft = mercLife - mercAge;
      console.log(yearsLeft);
      return "you still have " + yearsLeft + " years to live on Mercury ";
    }

  }
  venYearsLeft(){
    let venAge = Math.floor(this.age * .62);
    let venLife = Math.floor(this.lifeExpectancy * .62);
    if(venAge>venLife){
    let yearsPast = venAge - venLife;
    console.log(yearsPast);
      return "You are " + yearsPast + " years past your death on Venus ";
    }
    else {
      let yearsLeft = venLife - venAge;
      console.log(yearsLeft);
      return "you still have " + yearsLeft + " years to live on Venus ";
    }

  }
  marYearsLeft(){
    let marAge = Math.floor(this.age * 1.88);
    let marLife = Math.floor(this.lifeExpectancy * 1.88);
    if(marAge>marLife){
    let yearsPast = marAge - marLife;
    console.log(yearsPast);
      return "You are " + yearsPast + " years past your death on Mars ";
    }
    else {
      let yearsLeft = marLife - marAge;
      console.log(yearsLeft);
      return "you still have " + yearsLeft + " years to live on Mars ";
    }

  }
  jupYearsLeft(){
    let jupAge = Math.floor(this.age * 11.86);
    let jupLife = Math.floor(this.lifeExpectancy * 11.86);
    if(jupAge>jupLife){
    let yearsPast = jupAge - jupLife;
    console.log(yearsPast);
      return "You are " + yearsPast + " years past your death on Jupiter ";
    }
    else {
      let yearsLeft = jupLife - jupAge;
      console.log(yearsLeft);
      return "you still have " + yearsLeft + " years to live on Jupiter ";
    }

  }

}
