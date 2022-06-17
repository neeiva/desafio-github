function returnEvenValues(any) {
    let evenNums = [];
    for (let i = 0; i < any.length; i++) {
    if(any[i] % 2 === 0) {
        evenNums.push(any[i]);
    }
}

console.log(evenNums);
}

let any = [1, 2, 3, 4, 5, 7, 8];

returnEvenValues(any);