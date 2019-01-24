//for tiene 3 partes. la i, el mayor o menor o igual al numero que quiero llegar, si quiero ir sumando o resstando (++ o --)


//var sailorInner = ['Moon', 'Mercury','Mars', 'Jupiter', 'Venus']

//var i=4

//sailorInner.length


//for (i; i>=0; i--){
//console.log(i + ':'+ sailorInner[i])}

//eje2


//var listadoNombres = [];


//for( i=0; i <=4 ; i++) {
//nombreIngreso= prompt('Meteme tu nombre');
//listadoNombres.push(nombreIngreso);
//}

//console.log( listadoNombres)

//ejercicio 3

//var listaCosas =['cosa1','cosa2','cosa3', 'cosa4', 'cosa5'];
//var cosas= listaCosas
//listaCosas.length
//console.log (listaCosas);

//usar comando .pop que saca el ultimo elemento usar, delete [numero de elemento] deja vacio
//listacosas.pop por ejemplo, delete lo borra no lo saca y para volver a poner cosas hay que asignarlo 


//for (var i=0; i<=4; i++) {
  //  console.log (listaCosas);
    //cosas.pop ();
//}

//delete listaCosas [1] ;
//console.log (listaCosas);

//cosas [1]= 'cosanueva';
//console.log (listaCosas);


var notasnoAprobadas = [];
var listadodeNotasAprobadas = [];


for( var i=0; i<= 10; i++){
notaingresada = prompt('Ingrese su nota numérica')
if (notaingresada >= 8 ){
   console.log ('Excelente nota');
    listadodeNotasAprobadas.push (notaingresada);
    console.log (listadodeNotasAprobadas);
}
else if (notaingresada>=5 ){
    console.log ('Buena nota');
    listadodeNotasAprobadas.push (notaingresada);
    console.log (listadodeNotasAprobadas);
    
}
else {
    console.log('burra');
    notasnoAprobadas.push (notaingresada);
    console.log (notasnoAprobadas);
}
} 