//login con alert
const password = document.getElementById("password");
const login = document.getElementById("email");

const go = () => { 
  if (document.form.password.value === true &&  document.form.login.value === true){ 
    window.open('menu.html') //abre página index si se pone correcto
    } 
    else{ 
      alert("Porfavor ingrese, correo electrónico y contraseña correctos."); 
    } 
  }

//Perfil

//correo electronico
const user = document.getElementById("email").value;
const correo = document.getElementById("correo");
correo.innerHTML = user;

//tarjeta
const boton = document.getElementById('btn');
boton.addEventListener('click' ,() =>{
  let comments = document.getElementById('comment').value;
  document.getElementById('comment'). value = "";
  const cont = document.getElementById('cont');
  const newComments = document.createElement('div');
  let textNewComment =  document.createTextNode(comments);
  const contenedorElemento =  document.createElement('p')
  contenedorElemento.appendChild(textNewComment);
  newComments.appendChild(contenedorElemento);
  cont.appendChild(newComments) ;
});