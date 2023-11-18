"use strict";
class person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class student extends person {
    constructor(name, age, rollnumber) {
        super(name, age);
        this.courses = [];
        this.rollnumber = rollnumber;
    }
    registerforcourses(course) {
        this.courses.push(course);
    }
}
class instructor extends person {
    constructor(name, age, salary) {
        super(name, age);
        this.courses = [];
        this.salary = salary;
        this.courses = [];
    }
    assigncourses(course) {
        this.courses.push(course);
    }
}
class Course {
    constructor(id, subject) {
        this.student = [];
        this.id = id;
        this.subject = subject;
        this.student = [];
    }
    addstudent(students) {
        this.student.push(students);
    }
    setinstructor(instructor) {
        this.instructor = (instructor);
    }
}
class Department {
    constructor(Department) {
        this.course = [];
        this.Department = Department;
        this.course = [];
    }
    addcourse(course) {
        this.course.push(course);
    }
}
const std1 = new student("Hamza", 25, "By481688");
const std2 = new student("Ali", 30, "9428");
const std3 = new student("Usama", 25, "By481684");
const std4 = new student("Musa", 30, "5421");
const instructor1 = new instructor("Umar", 35, 40000);
const instructor2 = new instructor("Shahzad", 40, 45000);
const course1 = new Course(21, "Maths");
const course2 = new Course(22, "English");
const course3 = new Course(23, "Bio");
const course4 = new Course(24, "Chemistry");
const depert1 = new Department("Computer Science");
depert1.addcourse(course1);
depert1.addcourse(course2);
const depert2 = new Department("Biology");
depert2.addcourse(course2);
std1.registerforcourses(course1);
std1.registerforcourses(course2);
std2.registerforcourses(course3);
std2.registerforcourses(course4);
std3.registerforcourses(course1);
std3.registerforcourses(course2);
std4.registerforcourses(course3);
std4.registerforcourses(course4);
course1.addstudent(std1);
course1.addstudent(std2);
course1.setinstructor(instructor1);
course2.addstudent(std3);
course2.addstudent(std4);
course2.setinstructor(instructor2);
course3.addstudent(std1);
course3.addstudent(std2);
course3.setinstructor(instructor1);
course4.addstudent(std3);
course4.addstudent(std4);
course4.setinstructor(instructor2);
instructor1.assigncourses("Math");
instructor1.assigncourses("English");
instructor2.assigncourses("BIo");
instructor2.assigncourses("Chemistry");
depert2.addcourse(course3);
depert2.addcourse(course4);
console.log(std1.courses);
