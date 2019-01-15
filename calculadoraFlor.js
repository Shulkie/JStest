var numero1;
var numero2;
var operacion;
var resultado;

numero1=prompt('Ingrese numero uno');
operacion=prompt('Ingrese la operacion');
numero2=prompt('Ingrese numero dos');

numero1= parseInt (numero1);
numero2= parseInt (numero2);

if 
    (operacion =='+'){
        resultado= numero1+numero2
    }


else if  (operacion =='-'){
    resultado= numero1-numero2
}

else if  (operacion =='*'){
    resultado= numero1*numero2
}
else if
(operacion =='/'){
    resultado= numero1/numero2
}
else {
    document.write= ('Idiota');
}
if (typeof(resultado) != 'undefined'){
    document.write(resultado) ;

}

document.write ('resultado');
console.log('resultado')