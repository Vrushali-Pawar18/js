
// //question 1: Write a JavaScript program to get the current date.  
// // Expected Output :
// // mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

// let date = today.getDate();
// let month = today.getMonth();
// let year = today.getFullYear();

// //adding 0 to the date
// if(date<10){
//     date = '0' + date;
// }

// //adding 0 to the month
// if(month<10){
//     month = '0' + month;
// }
// console.log(`${month}/${date}/${year}` );
// console.log(`${month}-${date}-${year}` );


// //QUESTION 2: Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7. 

// let s1 = 5;
// let s2 = 6;
// let s3 = 7;

// //calculating semiperimeter for triangle
// let s = (s1+s2+s3)/2;

// // area of Traingle

// let area = Math.sqrt(s*((s-s1)*(s-s2)*(s-s3)));
// console.log(area);
 
// //QUESTION 3 : Print numbers from 1 to 10

// for(let i=0;i<=10;i++){
//     console.log(i);
// }

//QUESTION 4: Print the odd numbers less than 100
// for(let i=0;i<=100;i++){
//     if(i % 2 !=0){
//         console.log(i);
//     }
// }

//QUESTION 5 :  Print the multiplication table with 7

// let table = 1;
// for(let i=0;i<=10;i++){
//     table = 7 * i;
//     console.log("7 * " + "i" + " = " + table);
// }


//QUESTION 6:Print all the multiplication tables with numbers from 1 to 10

// for(let i=1;i<=10;i++){
//     for(let j=1;j<=10;j++){
//         let table = console.log(i + " * " + j + " = " + i*j);
//     }
// }


//QUESTION 7:Calculate the sum of numbers from 1 to 10

//1st method:
// let i = 10;
//     console.log(i*(i+1)/2);

//2nd way

// let sum = 0;
// for(let i=1;i<=10;i++){
//     sum += i;
// }
// console.log(sum);


//QUESTION 8: Calculate 10!

// let factorial = 1;
// for(let i=1;i<=10;i++){
//     factorial *= i;
// }
// console.log(factorial);


//QUESTION 9: Calculate the sum of odd numbers greater than 10 and less than 30

// let sum = 0;
// for(let i=10;i<30;i++){
//     if(i % 2 != 0){
//         sum += i;
//     }
// }
// console.log(sum);

//QUESTION 10 : Calculate the sum of numbers in an array of numbers 

// let input = prompt("insert array");
// let array = input.split(",");

// let sum =0;
// for(let i=0;i<=array.length;i++){
//     sum += i;
// }
// console.log(sum);



//QUESTION 11: Calculate the average of the numbers in an array of numbers

// let input = prompt("Enter the elements of an array : ");
// let array = input.split(",");

// let sum = 0;
// for(let i=0;i<=array.length;i++){
//     sum += i;
// }

// console.log(sum/array.length);

//QUESTION 12: Find the maximum number in an array of numbers

// let input = prompt("Enter the elemnts of array");
// let array = [4,5,9,6,8];                                                     

// let max = array[0];
// for(let i =0;i<=array.length;i++){
//     if(array[i]>max){
//         max = array[i];
//     }
// }

let array = [4,10,9,6,1]; 

for(let i=0;i<=array.length-1;i++){
    for(let j = 0;j<array.length-i-1;j++){
        if(array[j]>array[j+1]){
            let temp = array[j];
            array[j] = array[j+1];
            array[j+1] = temp;
        }
    }
    
}
console.log(array);
console.log(array[array.length-2]);







