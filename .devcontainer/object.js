const mySymb=Symbol("mykey1")
const obj={
    name:"Manish",
    email: "manishyadav@microsoft.com",
    [mySymb]:"mykey1"
}
//console.log(obj)
obj.email="manishyadav@Tcs.com"
//console.log(obj)
Object.freeze(obj)
obj.email="manish@cc.com"
//console.log(obj)
obj.greeting=function(){
    console.log("Hello World");
}