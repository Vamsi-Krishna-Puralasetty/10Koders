// Task - 1
function processNumbers(func){
    res1 = (func(3 , 4))
    console.log("Sum : ",res1)
}
processNumbers(function (num1,num2){
    return num1 + num2
})

// Task - 2
function greet(func1){
    console.log(func1("Alice"))
}
greet(function (name){
    return "Hello " +  name
})

// Task - 3
function calculate(func2){
    console.log("Difference : " , func2(10,5) )
}
calculate(function (num1 , num2){
    return num1 - num2
})











