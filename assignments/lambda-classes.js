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
