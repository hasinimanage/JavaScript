//**simple object */
var person = {
    name: "John", age: 31, 
    favColor: "green", height: 183
   };


//**Creatinf an object */
var p1 = new person("John", 42, "green");
var p2 = new person("Amy", 21, "red");

document.write(p1.age); // Outputs 42
document.write(p2.name); // Outputs "Amy"

