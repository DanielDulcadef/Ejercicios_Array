// variables
let city = "Marcos";

// Reassignment
let color = "red";
color = "green"

// Assign variables
let name1 = "Olga";
let name2 = name1;
name1 = "Andres";

let x = 'Laurel';
let y = 'Hardy';
let z = y;
y = x;
x = z;

// functions
function color() {
  return "red";
}
let result = color();


//Function calls
function f() {
  return "22";
}


function greet() {
  return "¡Haydo!";

}
let resultado = greet();

function saludo() {
  return "saludar";
}

let resultados = saludo();

function hello() {
  return 'Hi!';
}

let x = hello();

//Parameters
function give(input) {
  return input;


}
let resultado = give("fusuma");

//strings
function praise(name) {
  return name + " is great!"
}
console.log(praise)


function hi(name) {
  return 'Hi ' + name + '!';
}

let firstname = hi('Selva');
let secondname = hi('Pola');
let bothnames = firstname + ' ' + secondname;


//Logging
//puede mostrar el valor de variables funciones y strings
console.log("Hello console!");

function double(name) {
  return name + ' and ' + name;

}
let x =


  //==========================================================================================================
  //=============================================PROPIEDADES==================================================
  //==========================================================================================================


  //Strings length


  let charNumber = "Ai".length;
console.log(charNumber);
//te da el numero de caracteres de la palabra Ai
//otra forma
//console.log(charNumber.length);

//String : toUpperCase (mayuscula)
let ciudad = "Madrid";
let solucion = ciudad.toUpperCase();


//String : toLowerCase (minuscula)
let cite = "Madrid";
let solution = cite.toLowerCase();


function toCase(name) {
  return name.toLowerCase() + "-" + name.toUpperCase();
}


//string: charAt()
//da uno de los caracteres del string 
let char0 = 'Frantz'.charAt(0)
console.log(charAt(0))
//Ejercicio de manera largo
function shortcut(gamma, tech) {
  return gamma.charAt(0) + tech.char(1)
}
//String: trim()

let input = "Rosa Parks";
let name = input.trim();
console.log(name)


//función firstChar
//devuelve el primer caracter que no es un espacio
//1. Elimina los espacios
//2. toma el primer caracter


function firstChar(Rosa Parks) {
  return Rosa Parks.charAt(0)
}

function firstChar(text) {
  let nospace = text.trim();
  return nospace.charAt(0)

}
console.log(firstChar("Rosa Parks"));
R


//String: indexOf()
let n1 = "bit".indexOf("it")
console.log(n1);


function indexOfignoreCase(string1, string2) {
  return string2.indexOf("ma")

}
console.log(indexOfignoreCase("roca", "maleta"));


function indexOfIgnoreCase(text1, text2) {
  return text1.toUpperCase() + text2.toLowerCase();
}
console.log(indexOfIgnoreCase("bit", "It"))

// Escribe una función indexOfIgnoreCase tomando dos cadenas y determinando
//  la primera presencia de la segunda cadena en la primera.
//  La función debe ser case sensitive a las mayúsculas y minúsculas.
function indexOfIgnoreCase(text1, text2) {
  return text2.toLowerCase(0);
}
console.log(indexOfIgnoreCase('bit', 'IT'))

it

function indexOfIgnoreCase(firstWord, secondWord) {
  let firstWordToLower = firstWord.toLowerCase();
  let secondWordToLower = secondWord.toLowerCase();
  return firstWordToLower.indexOf(secondWordToLower);
}
console.log(indexOfIgnoreCase("bit", "IT"));

//string indexOf() with from idex
//el segundo parametro especifica la posicion 
//desde la cual comienza la busqueda
let n2 = "white rabbit".indexOf("it", 1);

// Escriba una función secondIndexOf, tomando dos cadenas y determinando 
// la segunda aparición de la segunda cadena en la primera.
//  Si la cadena buscada no aparece dos veces, debería devolver -1.

// Ejemplo: secondIndexOf('White Rabbit', 'it') debería devolver 10.


function secondIndexOf(first, second) {
  let animalcolor = first.indexOf("it", 3)
  return animalcolor

}
console.log(secondIndexOf("white rabbit", "it"))

//resultado 10

// Let m1="white Rabbit".indexOf("it",1);
// function secondIndexOf(s1,s2){
//   let firstIndex = s1.indexOf(s2);
//   return s1.indexOf(s2, firstIndex+1);
// }

///repaso indexOf
const paragraph = "The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?";
const buscarTermino = "dog";

let buscarTermino = "dog";
let perroEnTexto = paragraph.indexOf(buscarTermino);
console.log(perroEnTexto);


function thirdIndexOf(s1, s2) {
  let firstIndex = s1.indexOf(s2);  //dentro del string 1 buscas string 2.
  let secondIndex = s1.indexOf(s2, firstIndex + 1); //dentro de string 1 una vez encontrado el string 2 buscas la siguiente coincidencia.
  return s1.indexOf(s2, secondIndex + 1);
}
console.log(thirdIndexOf('White Rabbit isnt it?', 'it'))


//String: substring()
let see = "see and stop".substring(0, 3);

function firstWorld(string) {
  return string.substring(0, 3);
}
console.log(firstWorld('see and stop'))
see

//funcion generica

function firstWord(s) {
  let firstBlank = s.indexOf(" ");
  return s.substring(0, firstBlank); // buscar hasta el primer espacio
}
console.log(firstWord("Buenas tardes"));


//string: replace()
let str = "JavaScript"
let newstr = str.replace("Java", "ECMA")
console.log(newstr);

let str = "JavaScript"
let newstr = str.replace("a", "i")
console.log(newstr);

//forma larga

function normalize(date) {
  let date1 = date
  let date2 = date1.replaceAll('-', '/')
  return date2
}
console.log(normalize('20-05-2017'));


//forma rapida


function normalize(date) {


  return date.replaceAll('-', '/')
}
console.log(normalize('20-05-2017'));


//Numbers: 
function add(x, y) {
  return x + y;
}

console.log(add(1, 2));


//increment
let x = 3;
x++;
x = x * 2;
x--;


function toFahrenheit(cel) {
  return (cel * 9 / 5) + 32;
}
console.log(toFahrenheit(100));


// % Modulo - Inglés > Modulus
let m = 7 % 2; //el resto

function unDigito(n) {
  return n % 10
}
console.log(unDigito(785))




//Parentesis
let p1 = 3 + 4 - 2;

let p1 = 3 + 4 * 2;
console.log(p1)
11
undefined
let p1 = (3 + 4) * 2;
console.log(p1)
14

function mean(m, n)
return (m + n) / 2;

console.log(mean(10, 20));

//==========================================================================================================
//===============================================Manth======================================================
//==========================================================================================================
let v = Math.sqrt(9) //raiz cuadrada
console.log(v)

//Math.round() (redondear)
console.log(Math.round(0.5)); //output = 1

//Math.random() devuelve un numero entre 0 y 1 siendo 0 inclusivo y 1 exclusivo 

console.log(Math.random());
console.log(Math.random()) * 100; // numeros random de 0 a 100 siendo 100 exclusivo
console.log(Math.random() * 10) + 1;


//Math.pow()
Math.pow(base, exponente);

// Write a function hypotenuse that calculates the length of the hypotenuse of a right triangle.
//  The length of the two legs is passed to the function. Tip: In a right triangle the Pythagorean 
//  theorem is valid. If a and b are the lengths of the two legs and c is the length of the hypotenuse, 
//  the following is true: a² + b² = c². Since 3² + 4² = 5² applies, hypotenuse(3, 4) should return 5.

function hypotenuse(a, b) {
  let catetos = Math.pow(a, 2) + Math.pow(b, 2);
  return Math.sqrt(catetos);

}
console.log(hypotenuse(3, 4));

//min() and max()
console.log(Math.min(2, 3, 1))
console.log(Math.max(2, 3, 1))

function midrange(a, b, c) {
  let minimo = Math.min(a, b, c)
  let maximo = Math.max(a, b, c)
  return (minimo + maximo) / 2;
}
console.log(midrange(3, 9, 1));



function midrange(a, b, c) {
  let resultado = Math.min(a, b, c) + Math.max(a, b, c)
  return resultado / 2
}
console.log(midrange(3, 9, 1));


//Math.PI



// Escribe una función round100 que redondee un número a la centena más cercana.

// Ejemplo: round100(1749) debería devolver 1700 y round100(856.12) debería devolver 900.

function round100(A) {
  return Math.round(A / 100) * 100
}
console.log(round100(1749))




function round100(A) {
  return Math.round(A / 100) * 100
}
console.log(round100(856.12))



// Escribe una función "dice" que devuelva, como un dado, un número aleatorio entre 1 y 6.

function dice() {
  return Math.random() * 5 + 1;
}
console.log(dice());



function dice() {
  return Math.floor(Math.random() * 6) + 1;
}
console.log(dice());



function dice() {
  return Math.round(Math.random() * 5) + 1;
}
console.log(dice());

//las 3 anteriores llegan a la misma solucion



//parseInt
//parsea un elemento de cadena (string)
//y devuelve un entero del valor especificado

let myNumber = "3";
console.log(2 + parseInt(myNumber));

function add(a, b) {
  return parseInt(a) + parseInt(b);
}
console.log(add("102", "17"));


//separar un string en dos  (dos numeros) y sumarlos 


function add(a) {

  let thirt = parseInt(a.substring(0, 3)) + parseInt(a.substring(6, 8))

  return thirt

}
console.log(add("102 + 17"))




function add(s) {
  let summand1 = parseInt(s, 10);
  let indexPlus = s.indexOf('+');
  let sAfterPlus = s.substr(indexPlus + 1);
  let summand2 = parseInt(sAfterPlus, 10);
  return summand1 + summand2;
}




function nand(bool1, bool2) {
  let bol = !(bool1 && bool2)
  return bol
}
console.log(nand(true, true));



function nor(bo1, bo2) {
  let bol3 = !(bo1 || bo2)
  return bol3
}
console.log(nor(falso, falso))




function xor(bol1, bol2) {
  return !(bol1 && bol2)

}
console.log(xor(true, false))



  && significado(y)
  || significado(o)
  == significado(=)

= es una asignacion de valor
  == es igual que
    === igualdad estricta


0 es falso
1 es verdadero



// operador ternario

function isLessTan20(num) {
  return num < 20 ? true : false
}


//ARRAYS

let myArray = ["daniel", 22, true];
console.log(myArray[0])

console.log(myArray.length)


console.log(myArray) ///muestra el indice

let myString = "javascript"

console.log(myString.length)

//modificar array

let myArray = ["daniel", 22, true];

myArray[0] = "Pedro"  //modificas daniel por pedro 

console.log(myArray);


console.log(myArray.indexOf());


console.log(myArray.slice(0, 3)) //coges los que necesites //en strings funciona igual (strings.slice)

///PUSH /POP Y SHIFT / UNSHIFT

//por el final//
myArray.push("pedro") //añade
myArray.pop() //quita
//por el inicio//
myArray.unshift("pedro") //añade
myArray.shift() //quita

//SPLICE

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]

let myString = "pedro";
let newArray = myString.split("");
console.log(newArray)


let myString = "pedro";
let newArray = myString.join("");    //juntar las letras para formar frase o palabra 
console.log(newArray)




if (5 > 4) {
  console.log("5 es mayor que 4")
}

else {
  console.log("la anterior condicion no es verdadera")
}
//ejercicios If / else if / else///

//ejercicio 1
function number1(num) {
  if (num % 2 == 0) {
    return console.log("The number is even")

  }
  else {
    return console.log("The number is odd")
  }
}

function number1(num) {
  return num % 2 == 0 ? console.log("The number is even") : console.log("The number is odd")

}




//ejercicio 2

function number(n1, n2) {
  if (n1 > n2) {
    return console.log("The largest number is", n1)
  }

  else if (n1 < n2) {
    return console.log("The largest number is", n2)
  }


  else if (n1 == n2) {
    return console.log("The numbers are equal")
  }
}
console.log(number())




//ejercicios Arrays

//ejercicio1

let array = ["January", "February", "Marj", "April", "Mei"]
array[2] = "March"
array[4] = "May"
console.log(array)


//ejercicio1.2


let newMonths1 = ["January", "February", "Marj", "April", "Mei"]
let newMonths2 = ["june", "july", "August", "September"]
newMonths = newMonths1.concat(newMonths2)
console.log(newMonths)


//ejercicio1.3

let totalMonths = ['January', 'February', 'Marj', 'April', 'Mei', 'june', 'july', 'August', 'September']
totalMonths.push("October", "November", "December")

console.log(totalMonths)

//ejercicio4
function changeArray(num1, num2, num3) {
  let totalMonths = ['January', 'February', 'March', 'April', 'May', 'june', 'july', 'August', 'September',"October", "November", "December"]
  if (num1 > num2) {
    totalMonths.pop()
    console.log(totalMonths)
  }
  else if (num2>num3 && num2<10) {
    totalMonths.shift()
    console.log(totalMonths)
  }
  else if (num2>num3 || num2>num1) {
    totalMonths.push("October")
    console.log(totalMonths)
  }
  else {
    console.log("Bad luck!")
  }
}


//Ejercicio5

function first(a){
let firstArray = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
// console.log(firstArray.indexOf("Wednesday"))
let long = (firstArray.indexOf('Wednesday'))
if ('Wednesday'.length>long){
  console.log(firstArray.reverse())
}
}

//Ejercici5.2

function firstsecond(){
  let compare = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  let first = compare[0].length
  let second = compare[1].length
  if (first<second){
    console.log(compare.slice(0,3))
  }
}

//Ejercicio5.3


function check(a){
  let inc = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'] 
   if (inc.includes("Sunday")){
    console.log(inc.includes)
   }
   else {
    console.log("That's nice!")
   }
}



















































