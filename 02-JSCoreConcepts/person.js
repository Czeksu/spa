class Person {
    constructor(name, surname) {
        this._name = name
        this._surname = surname
    }
    
    Initials() {
        return `${this._name[0]}.${this._surname[0]}.`
    }

    FullName() {
        return `${this._name} ${this._surname.toUpperCase()}`
    }
}

let JN = new Person('Jan', 'Nowak')
let KC = new Person('Kamil', 'Czekaj')

console.log(JN.Initials())
console.log(JN.FullName())
console.log(KC.Initials())
console.log(KC.FullName())
