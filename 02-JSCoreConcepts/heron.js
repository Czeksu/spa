// boki trójkąta
a = 3;
b = 4;
c = 5;
h = 7

const heron = (a,b,c) => {
    let p = (a+b+c)/2
    return Math.sqrt(p*(p-a)*(p-b)*(p-c))
}

console.log(`Pole trójkąta o bokach ${a}, ${b} oraz ${c} wynosi ${heron(a,b,c)}.`);