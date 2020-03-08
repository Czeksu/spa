const reverse = arr => {
    let reversedArray = arr.reverse()
    return reversedArray;
}

const sort = arr => {
    let sortedArray = arr.sort()
    return sortedArray
}

const even = function(arr) {
    let arrEven = [];
    arr.forEach(element => {
       if(element%2 === 0) {
           arrEven.push(element)
       } 
    });
    return arrEven;
}

numbers = [8,3,2,1,5,4,6];
console.log(numbers);
console.log(reverse(numbers));
console.log(even(numbers));
console.log(reverse(even(numbers)));
console.log(even(sort(numbers)));