/*
 * Programming Quiz: Another Type of Loop (6-8)
 *
 * Use the existing `test` variable and write a `forEach` loop
 * that adds 100 to each number that is divisible by 3.
 *
 * Things to note:
 *  - you must use an `if` statement to verify code is divisible by 3
 *  - you can use `console.log` to verify the `test` variable when you're finished looping
 */

var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
    19, 300, 3775, 299, 36, 209, 148, 169, 299,
    6, 109, 20, 58, 139, 59, 3, 1, 139
];

/* According to the instructions you need to the iterate over each element of test array and modify the initial value if the value is divisible by 3. 
In a forEach loop: The first argument being passed to the callback function is the value of the current element being processed in the array.
The second argument is the index of the current element being processed in the array. The third argument is the reference to the array itself. */ 

test.forEach(function(n,i,newtest){
    if(newtest[i]%3===0){
        newtest[i]+=100;
    }
});
console.log(test);