var numero1
var numero2
var operacion

numero1=prompt('Ingrese un numero');
numero1=parseInt(numero1) ;
operacion=prompt('Ingrese una operacion');
numero2=prompt('Ingrese otro número');
numero2=parseInt(numero2);
console.log(typeof (numero1));
if
   ( operacion == '+' )
    {
    console.log(numero1+numero2);
    document.write(numero1+numero2);
}
else if

(operacion == '-')
{
    console.log(numero1-numero2);
    document.write(numero1-numero2);
}
else if

(operacion == '*')
{
    document.write(numero1*numero2);
}
else if
(operacion == '/')
{
    document.write(numero1/numero2);
}