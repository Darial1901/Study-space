/*let codeExample= 'You can ignore single and double quotes like this: \\\'\\\'  \\\"\\\"';
console.log(codeExample);*/
/*alert('Please enter your data');
let userName = prompt("Enter your name?", 'Name');
alert(`Your name is: ${userName}`)
let usersurName = prompt("Enter your surname?", 'Surname');
alert(`Your full name is: ${userName} ${usersurName}`)
let userAge = prompt("How old are you?", 'Age');
alert(`Your full name is: ${userName} ${usersurName}, your age is:${userAge}`)
let access = confirm('Are you admin?');
alert(`Your full name is: ${userName} ${usersurName}, your age is:${userAge}, admin status: ${access}`);*/

/*let count1 = +prompt("Enter first month salary", '1');
let count2 = +prompt("Enter second month salary", '2');
let result = count1 + count2
alert ("Your salary for 2 month is: " + result + "$")
alert ("You have extra bonus! Your total salary was: " + result + "$ It's increase for 1$ and now it is: " + ++result +"$")*/

let age = prompt("How old are you?", '');
if(age <= 17){confirm ("Do you study at school?");
} else if (age >17 && age < 25){confirm ("Do you study at university?");
} else if (age >=25 && age < 60){confirm ("Do you have a job?");
} else {confirm ("What are you doing?");
}
