const name= new String ('Manish')
//console.log(name.toUpperCase());
//console.log(name.length);
//console.log(name.indexOf('i'));
//console.log(name.charAt(4));
const newS=name.substring(0,3)
// const newS=name.substring(-5,3) =>Negitive Value Not allowed
console.log(newS)
const another=name.slice(-6,3);//=>Negative avlue allowed
console.log(another);
const newS1= "    yadav   "
//console.log(newS1);
//console.log(newS1.trim());=> its remove white spaces
console.log(newS1.includes('Manish'))
console.log(newS1.replace('y','m'))