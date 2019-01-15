switch (operacion){

    case '+':
    resultado = numero1 + numero2;
    break;
    case '-':
    resultado= numero1 - numero2;
    break;
    case '*':
    resultado= numero1 * numero2;
    break;
    case '/':
    resultado= numero1 / numero2;
    break;
    default:
       resultado= 'Error'
}
document.write(resultado);