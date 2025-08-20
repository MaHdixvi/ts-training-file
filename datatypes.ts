//we can difine variable in two ways:
var data1;
//or
let data2;
// //we can fill them like here:
// data1=1;
// data2=3;
// //also we can fill them in parameters way:
// var data3=4;
// //data Types:
// // 1:string var ----- = "your string" or also,we can use let ,
// var string1="hello";
// //Or we show the type also
// var string2:string="hello";
// var string3=new String("hmmmmm");
// string3=3;
// //for printing in console you can use console.log(variable)or instead of variable you can use num or "" or ...
// console.log("hello lets test");
// console.log(data1);
// console.log(data2,data3);
// console.log(string1,string2);
// console.log(string3);
// //2:num
// var num1:number=1;
// var num2: number = 1.34455;
// //3:boolean:
// var bool1: boolean = true;
// var bool2=false;
// //4:array:
var arr1:any[]=[1,2,3,4,5];
var arr2;
arr2=["hello","don't","write shorba"];
// console.log(arr1,arr2);
// //5:tuple
// var tup2: [string, number] = ["hello", 2];
// var tup1: [string, number, boolean, [string,number]] = ["hello", 2, true, tup2];
// tup1=['hmmm',2,false,tup2];
// console.log(tup1,...tup1);
// //6:any
// var a1;
// a1=2;
// a1=3;
// var a2:any;
// a2="221212121";
// a2=12;
// //7:const
// const p=3.14;
// //8:enum
// const enum color{
//     Red="red",
//     Blue="blue"
// }
// const carcolor:color=color.Blue;
// console.log(carcolor);
// //9:object
// interface Car {
//   brand: string
//   publishDate?: number
// }
// const car: Car = {
//   brand: "ferrari",
// };
// console.log(car,car.brand,car.publishDate);
// //function for arrays:
// //filter((-----)=>_______);
var arr3 = arr2.filter((txt1) =>
  txt1.includes("r"));
console.log(arr3);
// var arr4 =arr1.filter((num)=> num>2);
// console.log(arr4);
// //find
// var arr5 =arr2.find((txt2)=> txt2==="hello");
// console.log(arr5);
// //reduce
// var arr =arr1.reduce((num1,num2)=> num1+num2);
// console.log(arr);
// // //map
// // // Driver code
// let arr6: number[] = [-11, -89, -23, 7, 98];

// // // use of map() method
// let val: number[] = arr6.map((x) => Math.abs(x * 2));
// // // printing element
// console.log(val);
// //defining type seperate
// type str=string;
// var a :str;
// a="2";
// //interfaces:
// interface User{
//     firstname:string,
//     lastname:string
// }
// const infouser:User={
//     firstname:"mahdi",
//     lastname:"shahmoradi"
// }
// console.log(infouser);
// //define a function:
// // //simple function:
// function swapNumbers1(num1:number,num2:number):string{
//     let tmp=num1;
//     num1=num2;
//     num2=tmp;
//     return `${num1},${num2}`
// }
// console.log(swapNumbers1(10,20));
// //arrow function:
var tmp;
// let swapNumbers2=(num1:number,num2:number):string=>{
//     tmp=num1;
//     num1=num2;
//     num2=tmp;
//     return `${num1},${num2}`
// }
// console.log(swapNumbers2(2,3));
// //object function:
// var swapNum=(num1:number,num2:number):string=>{
//     tmp=num1;
//     num1=num2;
//     num2=tmp;
//     return `${num1},${num2}`
// }
// console.log(swapNum(2,3));
// //array in function
// function printing(num1:number,num2:number,arr:number[]):string{
//     let tmp=num1;
//     num1=num2;
//     num2=tmp;
//     return `${num1},${num2},${arr.join(",")}`;

// }
// console.log(printing(10,20,[1,2,3,4]));
// class Person {
//   name: string;
//   lastname: string;
//   age: number;
//   job: string;
//   phonenumber: string;
//   view: number = 0;

//   constructor(
//     fname: string,
//     lname: string,
//     age: number,
//     job: string,
//     phnum: string
//   ) {
//     this.name = fname;
//     this.lastname = lname;
//     this.age = age;
//     this.job = job;
//     this.phonenumber = phnum;
//   }
//   logout() {
//     console.log("peroson logged out");
//   }
//   updateviews() {
//     this.view++;
//   }
// }
// var person1 = new Person("mahdi","shahmoradi",20,"bikar","09100295341");
// console.log(person1.view);
// person1.logout()
// person1.updateviews()
// person1.updateviews()
// console.log(person1.view);

