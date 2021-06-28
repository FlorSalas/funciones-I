// //1
// let edad= parseInt(prompt("cual es tu edad?"));

// function multiplicacion(n1,n2) {
    
//     return (n1*n2)

// } console.log(multiplicacion(edad,7));

//2
// let nombre= prompt("¿cual es tu nombre?");

// function saludo(name){
//     return ("hola " + name);
// }
// console.log(saludo(nombre));

//3
// alert ("Bienvenido a nuestra pagina!");


//4
// let ingr= parseFloat(prompt("ingrese la temperatura"));
// let ingr2= parseInt(prompt("si ingreso la temperatura en celsius, presione 1. si ingreso la temperatura en farenheit, presione 2."));
// let resultado;
// let resultado2;

// function temperatura(dato1, dato2){
//         return (dato1 + dato2);
// } 

// if (ingr2==1){ //celsius a farenheit//
//     resultado=(ingr*1.8)+32;
//     console.log(temperatura("la temperatura en farenheit es de: ",resultado));
// }else if(ingr2==2){
//     resultado2=(ingr-32)/1.8;
//     console.log("la temperatura en celsius es de: ",resultado2);
// }else{
//     alert("el dato ingresado es invalido")
// }

//5

//6 //validar datos

// let edad= parseInt(prompt("ingrese su edad"));
// let beb= parseInt(prompt("elija entre: 1.cerveza 2.jugo o 3.agua"));
// let menor;
// let dinero;

// function vuelto(pago,costo){
//     return pago-costo
// }

// if(edad<18 && beb==1){
//     alert("usted es menor de edad, no puede comprar alcohol");
//     menor= prompt("si desea otra bebida elija entre: 1.jugo 2.agua 0.salir");
//     if(menor == 1){
//         alert("usted ha comprado jugo, debe abonar $30");
//         dinero= parseInt(prompt("con cuanto abonara?"));
//         alert("su vuelto es de " + (vuelto(dinero, 30)));
//         }else if(menor == 2){
//             alert("usted ha comprado agua, debe abonar $10");
//             dinero= parseInt(prompt("con cuanto abonara?"));
//             alert("su vuelto es de " + (vuelto(dinero,10)));
//         }else if(menor == 0){
//             alert("operacion terminada");
//         }

// }else if(edad<18 && beb==2 || beb==3){
//     if(beb == 2){
//         alert("usted ha comprado jugo, debe abonar $30");
//         dinero= parseInt(prompt("con cuanto abonara?"));
//         alert("su vuelto es de " + (vuelto(dinero, 30)));
//     }else if(beb == 3){
//         alert("usted ha comprado agua, debe abonar $10");
//         dinero= parseInt(prompt("con cuanto abonara?"));
//         alert("su vuelto es de " + (vuelto(dinero,10)));
//     }else if(menor == 0){
//         alert("operacion terminada");
//     }
// }

// else if(edad>=18){
//     dinero= parseInt(prompt("con cuanto abonara?"));
//         if (dinero<100 && beb==1) {
//             alert("el dinero no alcanza para la compra");
//          }else if(dinero<30 && beb== 2){
//             alert("el dinero no alcanza para la compra");
//         }else if(dinero<10 && beb==3){
//             alert("el dinero no alcanza para la compra");
//         }else if(dinero>=100 && beb== 1) {
//             alert("usted ha comprado cerveza, debe abonar $100");
//             alert("su vuelto es de " + (vuelto(dinero,100)));
//          }else if(dinero>=30 && beb== 2){
//             alert("usted ha comprado jugo, debe abonar $30");
//             alert("su vuelto es de " + (vuelto(dinero,30)));
//         }else if(dinero>=10 && beb== 3)
//             alert("usted ha comprado agua, debe abonar $10");
//             alert("su vuelto es de " + (vuelto(dinero,10)));
// }else{
//     alert("la operacion ha terminado");
// }


//7
// let dato1= parseFloat(prompt("ingrese las horas"));
// let dato2=parseInt(prompt("ingrese los minutos"));
// let dato3=parseInt(prompt("ingrese los segundos"));

// function segundos(hora, minutos, segundos){
//     return (hora*3600) + (minutos*60) + segundos;
// }
// console.log (segundos(dato1, dato2, dato3));

//8
// let notas= [];
// let ingreso;
// let suma=0;
// let i=0;

// while(ingreso!==0){
//     ingreso= (parseFloat(prompt("ingrese las notas una por una. Escriba salir para terminar.")));
//     notas.push(ingreso);
//     i++ //hago que las notas se ingresen en la variable "ingreso" para guardarlas en el array con push//
// }console.log(notas);

// for(i=0;i<notas.length;i++){
//     suma+=notas[i]; //le suma a "suma", que esta en 0, el valor que ingresa en cada vuelta[i]//
// }console.log(suma);

// notas.pop(); //elimino el ultimo elemento del array//
// console.log(notas); //muestro el resultado final del array//

// function promedio(notas,cantidadNotas){
//     return notas/cantidadNotas;
// }

// console.log("el promedio de las notas ingresadas es de: " + promedio(suma, (i-1)));
// alert("el promedio de las notas ingresadas es de: " + promedio(suma, (i-1)));
