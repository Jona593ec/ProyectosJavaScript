//Tipos de Datos en Java Script

 let miEntero = 10;
 console.log(miEntero);
 console.log(typeof miEntero)

//si hacemos alguna modificacion a la variable toma el tipo del nuevo dato

miEntero = "HOLA";
console.log(typeof miEntero)


 let miFlotante = 7.9;
 console.log(miFlotante);
 console.log(typeof miFlotante)

 let miCadena ="Hola";
 console.log(miCadena)
 console.log(typeof miCadena)

 let miBoolean = true; //true o false
 console.log(miBoolean)
 console.log(typeof miBoolean)

 let mi_Null = null;
 console.log(mi_Null)
 console.log(typeof mi_Null)

 let miUndefined = undefined;
 console.log(miUndefined)
 console.log(typeof miUndefined)


 //Hoisting = podemos usar unaa variable y despues declararle 
 //solo funciona con la palabra reservada var
 var x ; //1. Declaramos la variable
 x = 10; // 2. inicializamos la variable

 console.log(x);

 //CONSTANTES EN JAVA SCRIPT
 //Utilizamos la palbra resrvada const
 // SE define en Mayusculas y si tiene mas palabras con guion bajo _

 const MI_CONSTANTE = 10;
 // MI_CONSTANTE=20; // No podemos camviar el valor de una constante
 console.log(MI_CONSTANTE);

 console.log(Math.PI);

 //Constante de segundos por minutos

 const SEGUNDOS_POR_MINUTOS = 60;
 console.log(SEGUNDOS_POR_MINUTOS)