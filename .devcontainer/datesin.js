let myDate=new Date()
//console.log(myDate.toDateString());
//console.log(myDate.toLocaleDateString());
//console.log(myDate.toLocaleString());
//let myCreateDate=new Date(2024,00,30)
let myCreateDate=new Date("07-30-2024")
console.log(myCreateDate.toDateString())
console.log(myCreateDate.toLocaleDateString());
console.log(Math.floor(myCreateDate.getTime()/1000));