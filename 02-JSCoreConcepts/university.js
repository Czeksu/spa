names = ['Piotr', 'Anna', 'Michał', 'Paulina', 'Mateusz', 'Magda'];

const getFirst = (n, arr) => { 
    return arr.slice(0,n) 
}

class Students {
    constructor(names) {
        this.names = names
    }

    startWith(letter){ 
        let startWith = []
        this.names.forEach(element => {
            if(element[0] === letter) {
                startWith.push(element)
            }
        }

        return startWith
    } // names (array) which starts with the letter

    sort() {
        return this.names.sort() // names (array) in alphabetical order 
    }

    get() {
        return this.names // names (array) in natural order
    }

    getFirst(n) {
        return this.names.slice(0,n)// get first 'n' names (array) 
    }
}

students = new Students(names);
console.log(students.get());
console.log(students.sort());
console.log(students.startWith('P'));
console.log(students.startWith('M').sort());
//console.log(students.sort().getFirst(4));
//console.log(students.startWith('M').sort().getFirst(2));
console.log(students.get());



