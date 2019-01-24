// CODE here for your Lambda Classes

class Person {
    constructor(props){
        this.name = props.name;
        this.age = props.age;
        this.location = props.location;
        this.gender = props.gender;
    }
    speak(){
        return (`Hello, my name is ${this.name}, I am from ${this.location}`);
    }
}

class Instructor extends Person {
    constructor(iProps){
        super(iProps);
        this.specialty = iProps.specialty;
        this.favLanguage = iProps.favLanguage;
        this.catchPhrase = iProps.catchPhrase;
    }
    demo(subject){
        return ('Today we are learning about {subject}');
    }
    grade(student, subject){
        return ('{student.name} receives a perfect score on {subject}');
    }
}

class Student extends Person {
    constructor(sProps){
        super(sProps);
        this.previousBackground = sProps.previousBackground;
        this.className = sProps.className;
        this.favSubjects = sProps.favSubjects;
    }
    listSubjects(){
        console.log(student.favSubjects);
    }
    PRAssignment(subject){
        return ('{student.name} has submitted a PR for {subject}');
    }
    sprintChallenge(subject){
        return ('{student.name} has begun spring challenge on {subject}');
    }
}
