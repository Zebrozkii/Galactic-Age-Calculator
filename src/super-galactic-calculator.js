export class Birthday {
  constuctor(month, day, year){
    this.month = month;
    this.day = day;
    this.year = year;
  }
   birthdayToDate(birthday){
    let birthdate = new Date(birthday.year,birthday.month,birthday.day);
    return birthdate;
  }
   getAge(birthday){
    const today = new Date();
    const birthdate = Birthday.birthdayToDate(birthday);
    const age = today - birthdate;
    return age;
  }
  getAgeMercury(age){
    age = age * .24;
    return age;
  }
  getAgeVenus(age){
    age = age * .62;
    return age;
  }
  getAgeMars(age){
    age = age * 1.88;
    return age;
  }
  getAgeJupiter(age){

    age = age * 11.86;
    return age;
  }

}
