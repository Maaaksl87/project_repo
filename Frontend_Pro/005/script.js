const name = "Максим";
const age = 18;
let Student = (isStudent = true) ? "студент" : '';
let height = 171.5;
let otherNumber = 18;

const answer = `Привіт, мене звати ${name}, мені ${age} років та я ${Student} Вінницького національного технічного університету. Мій зріст ${height} см`
console.log(answer);
console.log(typeof answer); //string


console.log(
    age == name, //false 
    age == Student, //false 
    age == height, //false 
    age == otherNumber, //true 

    Student == null, //false
    Student === null, //false

    null == 0, //false
    null !== 0, //true
    null === 0, //false
);

const person = {
    name,
    age,
    isStudent,
    height,
}

console.log(person);


