export class Birthday {
  constuctor(month, day, year,lifeExpectancy){
    this.month = month;
    this.day = day;
    this.year = year;
    this.lifeExpectancy= lifeExpectancy;
  }
   birthdayToDate(birthday){
    let birthdate = new Date(birthday.year,birthday.month,birthday.day);
    return birthdate;
  }
   getAge(birthday){
    const today = new Date();
    const birthdate = Birthday.birthdayToDate(birthday);
    const age = Math.round(today - birthdate);
    return age;
  }
  getAgeMercury(age){
    age = age * .24;
    return Math.round(age);
  }
  getAgeVenus(age){
    age = age * .62;
    return MAth.round(age);
  }
  getAgeMars(age){
    age = age * 1.88;
    return Math.round(age);
  }
  getAgeJupiter(age){
    age = age * 11.86;
    return Math.round(age);
  }

}
