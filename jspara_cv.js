const info = document.querySelector('.about_referencias') ;
function dce(t) {
 return document.createElement(t) ;
 } ;
     const url = 'https://jsonplaceholder.typicode.com/users' ;
 
    fetch(url)
    .then(response => response.json())
    .then(data => {
             data.forEach(usuario => {   
             const nombre = dce("p") ;
             nombre.innerHTML = "Nombre: "+usuario.name ;
             const cel = dce("p") 
             cel.innerHTML = "Teléfono: "+usuario.phone ;
             info.append(nombre, cel)
             
     });
 })