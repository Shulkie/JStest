//1. Teniendo dos arrays de canciones, comparar sus longitudes y 
//mostrar en pantalla “La playlist de Nirvana tiene más canciones” 
//si el array playlistNirvana tiene más canciones, o “La playlist de 
//Foo Fighters tiene más canciones” si el array playlistFoo tiene más.

//var playlistNirvana = ['Smells Like Teen Spirit', 'Come As You Are', 'Heart-Shaped Box', 'Lithium'];
//var playlistFoo = ['Everlong', 'The Pretender', 'Learn to Fly']


//playlistNirvana.length
//console.log (playlistNirvana.length)
//playlistFoo.length
//console.log (playlistFoo.length)
  
//document.write ('La playlist de Nirvana tiene más canciones')

//2. Tenemos una array de palabras. Queremos mostrar por pantalla la 
//longitud que tiene cada palabra.

var playlist = ['Smells Like Teen Spirit', 'Come As You Are', 'Heart-Shaped Box', 'Lithium'];

// mostrar la longitud de cada palabra en el array

//console.log(playlist[0].length);
//console.log(playlist[1].length);
//console.log(playlist[2].length);
//console.log(playlist[3].length);


//3.Con el mismo array de canciones del anterior ejercicio, 
//queremos mostrar por pantalla la longitud de cada palabra 
//y un mensaje “tiene mas de 15 caracteres”, cuando su longitud
//sea mayor a 15.

for (var i = 0; i <= playlist[i].length; i++) {
    if (playlist[i].length-1 >= 15) {
        document.write("la canción " + playlist[i] +  " tiene más de 15 caracteres" + "<br/>");
 
    }
 }