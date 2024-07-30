//Array Declaration 
let ar=[2,25,36,95,54,555]
let sub=["Math","English","ISH","ATC"];
let arr =new Array(152,544,9549,21,41,5);
console.log(arr[3]);
//Array Methods
arr.push(54)// =>insert value in array in last position
arr.pop()// =>delet value from last position
arr.unshift(4230)//=>insert value from first position
arr.shift()//=>Remove value from first index

//console.log(arr.includes(2));//=>this function returns enterd values are avaliable or not
//console.log(arr.indexOf(4));//=>this function returns enterd number of index if enterd number are not avaliable then return -1
let newArr=arr.join()//=>This function join two Array and array type return in string
//console.log(typeof (newArr));
let newA=arr.slice(0,3)//This function returns starting point to end range-1
//This function manipulate original array
//console.log("A",arr);
//console.log(newA);
let newA2=arr.splice(1,3);//
//console.log("B",arr);
//console.log(arr);
//console.log(newA2);
const logic=["c","c++","java"]
const dev=["js","react","mongo.db"];
//logic.push(dev)//=>This Function store two array in single Array
const All_Ln=logic.concat(dev)//=>This function store multiple array in new Array
console.log(All_Ln);
