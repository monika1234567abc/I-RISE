var names=["pooja","arti","Prarthana","Prasad","Devi","Dipak"]
names.sort();
console.log(names)


var numbers=[45,52,58,23,28,59,60,100]
numbers.sort();
console.log(numbers)

var numbers2=[45,52,58,23,28,59,60,100]
numbers.sort((a,b)=>b-a);
console.log(numbers2)
numbers.sort((a,b)=>a-b);
console.log(numbers2)

myobject={Studentsnumber:"two hundred"}
var result=JSON.stringify(myobject)
console.log(result)
console.log(result.studentsnumber)

result=JSON.parse(result)
console.log(result)
console.log(result.studentsnumber)