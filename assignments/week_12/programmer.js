function Programmer(
    name, 
    job, 
    age, 
    language
){
    this.name = name;
    this.job = job;
    this.age = age;
    this.language = language;
    this.printProgrammer = function(){
        console.log('Name: ' + this.name + '\n' + 'Job: ' + this.job + '\n' + 'Age: (%s)', this.age);
        console.log('Language: ' + this.language);
    };
}

Programmer.prototype.printProgrammer = function(){
    console.log('Name: ' + this.name + '\nJob: ' + this.job + '\nAge: (%s)', this.age);
    console.log('Language: ' + this.language);
}

let programmer = new Programmer('David', 'Sr. Software Engineer', '31', 'JS');
programmer.printProgrammer();