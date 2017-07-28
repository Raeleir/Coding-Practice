let fizzBuzz = () => {
    let arr = [];
    for(i=1;i<=20;i++){
        i % 3 === 0 && i % 5 === 0 ? arr.push("FizzBuzz") : i % 3 === 0 ? arr.push("Fizz") : i % 5 === 0 ? arr.push("Buzz") : arr.push(i);
    }
    return arr;
}

module.exports = fizzBuzz;