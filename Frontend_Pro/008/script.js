const randomCharacter = {
    name: "Mike",
    universe: "сон",
    occupation: "лякає дітей",
    powers: [
        {
            good: true,
            high: false,
            color: "green",
            eyes: "one"
        }
    ],
    introduce: function () {
        console.log(`Привіт, я ${this.name}!`);
    },
};

console.log(randomCharacter.occupation); // "лякає дітей"
console.log(randomCharacter.powers[0].high); // false

randomCharacter.introduce(); // Привіт, я Mike!

let stringJSON = JSON.stringify(randomCharacter);
console.log(stringJSON);

let parseJSON = JSON.parse(stringJSON);
console.log(parseJSON);

delete randomCharacter.occupation;
console.log(randomCharacter);

console.log("name" in randomCharacter); //true існує