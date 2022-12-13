// find the factorial of a number
function factorial(x) {

    // if number is 0
    if (x == 0) 
    {
        return 1;
    }

    // if number is positive
    else 
    {
        return x * factorial(x - 1);
    }
}

// Insert the number
const num = prompt('Enter a positive number: ');

// call function factorial() if num is positive
if (num >= 0) 
{
    const result = factorial(num);
    console.log(`The factorial of ${num} is ${result}`);
}
else 
{
    console.log('Enter a positive number.');
}