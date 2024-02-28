
//computed properties
// const key1 = "objkey1";
// const key2 = "objkey2";

// const value1 = "myvalue1";
// const value2 = "myvalue2";

// const obj = {
//     [key1] : value1,
//     [key2] : value2
// }

// console.log(obj);

// //spread operator

// const obj1 = {
//     key1 : "value1",
//     key2 : "value2"
// }
// const obj2 = {
//     key1 : "uniquevalue1",
//     key3 : "value3",
//     key4 : "value4"
// }

// const newObject = {...obj2,...obj1};
// console.log(newObject);


//objets inside array

// const users = [
//     {userId : 1,name : "Vrushali", age : 23},
//     {userId : 2,name : "atharv", age : 23},
//     {userId : 3,name : "anushka", age : 23}
// ]
// console.log(users);

// for(let user of users){
//     console.log(user);
// }


//nested destructuring
const users = [
    {userId : 1,name : "Vrushali", age : 23},
    {userId : 2,name : "atharv", age : 23},
    {userId : 3,name : "anushka", age : 13}
]

const [user1,user2,user3] = users;
console.log(user1);
console.log(user2);
console.log(user3);

//fetching the objects of user
const [{name:fname},{userId},{age}] = users;
console.log(fname);
console.log(userId);
console.log(age);