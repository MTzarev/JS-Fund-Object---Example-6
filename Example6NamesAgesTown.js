function list(input) {
class PersonBook {
    constructor (name, age, town){
        this.name = name;
        this.age = age;
        this.town = town;
    }
        book (){
            console.log(`${this.name} is ${this.age} years old, and he/she is from ${this.town}`)
        }
}
for (let i=0; i<input.length; i++){
    let data = input[i].split(` `);
    let name, age, town
    [name, age, town]=[data[0], data[1], data[2]]

    let person = new PersonBook(name, age, town)
    person.book()

    
}

    console.log();
}
list(['Miro 35 Plovdiv', 'Dani 11 Plovdiv', `Milena 35 Dimitrovgrad`])