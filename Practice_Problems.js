//question 1: Write a JavaScript program to display the current day and time in the following format.  
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

// Get the current date and time
var today = new Date();

// Get the day of the week (0-6, where 0 is Sunday and 6 is Saturday)
var day = today.getDay();

// Array of day names
var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Display the current day
console.log("Today is: " + daylist[day] + ".");

// Get the current hour, minute, and second
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();

// Determine if it's AM or PM
var prepand = (hour >= 12) ? " PM " : " AM ";

// Convert 24-hour format to 12-hour format
hour = (hour >= 12) ? hour - 12 : hour;

// Check for special cases when hour is 0
if (hour === 0 && prepand === ' PM ') {
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = ' Noon';
    } else {
        hour = 12;
        prepand = ' PM';
    }
}

// Check for special cases when hour is 0
if (hour === 0 && prepand === ' AM ') {
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = ' Midnight';
    } else {
        hour = 12;
        prepand = ' AM';
    }
}

// Display the current time
console.log("Current Time: " + hour + prepand + " : " + minute + " : " + second); 


//question 2: Write a JavaScript program to get the current date.  
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

let date = today.getDate();
let month = today.getMonth();
let year = today.getFullYear();

//adding 0 to the date
if(date<10){
    date = '0' + date;
}

//adding 0 to the month
if(month<10){
    month = '0' + month;
}
console.log(`${month}/${date}/${year}` );
console.log(`${month}-${date}-${year}` );


//QUESTION 3: Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7. 

let s1 = 5;
let s2 = 6;
let s3 = 7;

//calculating semiperimeter for triangle
let s = (s1+s2+s3)/2;

// area of Traingle

let area = Math.sqrt(s*((s-s1)*(s-s2)*(s-s3)));
console.log(area);
 





