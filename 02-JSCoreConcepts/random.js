let randomNumbers = Array.from({length: 10}, () => Math.floor(Math.random()*15+5));
const showNumbers = arr => arr.forEach(element => console.log(element))
showNumbers(randomNumbers)