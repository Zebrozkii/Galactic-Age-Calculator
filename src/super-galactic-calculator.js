export default class Birthday {
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

}
