const accountId = 1324

let accountEmail = "vedant@gmail.com"

var accountPassword = "1232445"
accountCity = "tata"
let accountState; //it will be an undefined value no error

// accountId = 2 can't assign value to const variable once assigned

console.log(accountEmail);
console.log(accountPassword);

console.table([accountEmail,accountPassword])

accountEmail = "ved@gmail.com"
accountPassword = "2345"
accountCity = "Mumbai"

console.table([accountEmail,accountPassword,accountCity])

/*
prefer not to use var
because of issue in block scope and functional scope
*/