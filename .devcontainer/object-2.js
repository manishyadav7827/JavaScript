//const clg =new Object();//=>Singletone object create
const clg ={};//=>Non-SingleTone object create
clg.id=25465
clg.name="Manish"
clg.fees=300000

//console.log(clg);
const registration={
  userid:"kuch@gmail.com",
  fullname:{
    userfullname:{
        firstname:"Manish",
        lastname:"Yadav",
    }
  }
}
//console.log(registration);
//console.log(registration.fullname.userfullname.lastname);
const obj1={1:"A",2:"B"};
const obj2={3:"C",4:"D"}
//const obj3=Object.assign({}, obj1,obj2);//=>{}target,obj are source
const obj3={...obj1,...obj2}//=>In this use spread function(...) 
//console.log(obj3);
//registration[1].firstname
console.log(Object.keys(registration));//=>Its provide all keys and its data type are string
console.log(Object.values(registration));//=>this is provide all values
console.log(registration.hasOwnProperty('fullname'));//=>its method provides check methods are available or not

