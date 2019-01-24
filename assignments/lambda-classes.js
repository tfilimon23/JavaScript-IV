// CODE here for your Lambda Classes

class Person {
    constructor(props){
        this.name = props.name;
        this.age = props.age;
        this.location = props.location;
        this.gender = props.gender;
    }
    speak(){
        return (`Hello my name is ${this.name}, I am from ${this.location}.`);
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
        return (`Today we are learning about ${subject}`);
    }
    grade(student, subject){
        return (`${student.name} receives a perfect score on ${subject}`);
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
        return (`${this.favSubjects}`);
    }
    PRAssignment(subject){
        return (`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject){
        return (`${this.name} has begun sprint challenge on ${subject}`);
    }
}

class ProjectMananger extends Instructor {
    constructor(pProps){
        super(pProps);
        this.gradClassName = pProps.gradClassName;
        this.favInstructor = pProps.favInstructor;
    }
    standUp(channel){
        return (`${this.name} announces to ${channel}, @channel standy times!`);
    }
    debugsCode(student, subject){
        return (`${this.name} debugs ${student.name}'s code on ${subject}`)
    }
}

const sally = new Person({
    name: 'Sally',
    age: 12,
    location: 'Warren',
    gender: 'F'
});

const nathan = new Instructor({
    name: 'Nathan',
    age: 28,
    location: 'Happy Valley',
    gender: 'M',
    specialty: 'Redux',
    favLanguage: 'JavaScript',
    catchPhrase: 'Cash me outside'
});

const amy = new Instructor({
    name: 'Amy',
    age: 32,
    location: 'Honolulu',
    gender: 'F',
    specialty: 'React',
    favLanguage: 'Python',
    catchPhrase: 'Aloha and Mahalo'
});

const jake = new Student({
    name: 'Jake',
    age: 19,
    location: 'Baton Rouge',
    gender: 'M',
    previousBackground: 'Bus boy',
    className: 'Web17',
    favSubjects: ['HTML', 'CSS', 'JS']
});

const tommy = new Student({
    name: 'Tommy',
    age: 22,
    location: 'Vancouver',
    gender: 'M',
    previousBackground: 'Mechanic',
    className: 'iOS5',
    favSubjects: ['Java', 'C#', 'HTML']
});

const meg = new ProjectMananger({
    name: 'Meg',
    age: 24,
    location: 'Anchorage',
    gender: 'F',
    specialty: 'LESS',
    favLanguage: 'Java',
    catchPhrase: 'Hey, you gonna eat that?',
    gradClassName: 'Web14',
    favInstructor: 'Mike'
});

const zoey = new ProjectMananger({
    name: 'Zoey',
    age: 40,
    location: 'Raleigh',
    gender: 'F',
    specialty: 'SASS',
    favLanguage: 'C#',
    catchPhrase: 'Keep calm and code on',
    gradClassName: 'Web12',
    favInstructor: 'Diana'
});

console.log(sally.age); // 12
console.log(sally.speak()); // Hello, my name is Sally, I am from Warren.
console.log(nathan.gender); // M
console.log(nathan.catchPhrase); // Cash me outside
console.log(amy.demo('classes')); // Today we are learning about classes.
console.log(amy.grade(tommy, 'constructor functions')); // Tommy receives a perfect score on constructor functions
console.log(jake.location); // Baton Rouge
console.log(jake.favSubjects); // ['HTML', 'CSS', 'JS']
console.log(tommy.listSubjects.apply(tommy, tommy.favSubjects)); // ['Java', 'C#', 'HTML']
console.log(tommy.PRAssignment('Javascript III')); // Tommy has submitted a PR for Javascript III
console.log(tommy.sprintChallenge('Javascript')); // Tommy has begun sprint challenge for Javascript
console.log(meg.specialty); // LESS
console.log(meg.gradClassName); // Web14
console.log(zoey.standUp('web17_zoey')); // Zoey announces to web17_zoey, @channel standy times!
console.log(zoey.debugsCode(jake, 'array methods')); // Zoey debugs Jake's code on array methods