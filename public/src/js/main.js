window.onload = () =>{
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
    //Si estamos logueados
    paginaRegistro.style.display = "none";
    menuPrincipal.style.display = "block";
    console.log("User > "+JSON.stringify(user));
    }else{
    //No estamos logueados
    paginaRegistro.style.display = "block";
    menuPrincipal.style.display = "none";
    }
  });
};

function register(){
  const email = document.getElementById('email1').value;
  const password = document.getElementById('password1').value; 
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then(()=>{
    console.log("Usuario registrado");
    alert("Registro exitoso, ahora puedes iniciar sesión");
  })
  .catch((error)=>{
    console.log("Error de firebase"+error.code);
    console.log("Error de firebase, mensaje"+error.message);
  });
}

function login(){
  const email = document.getElementById('email1').value;
  const password = document.getElementById('password1').value; 
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then(()=>{
    console.log("Usuario con login exitoso");
  })
  .catch((error)=>{
    console.log("Error de firebase"+error.code);
    console.log("Error de firebase, mensaje"+error.message);
  });
}

function logout(){
  firebase.auth().signOut()
  .then(()=>{
    console.log("Usuario finalizó su sesión");
  })
  .catch((error)=>{
    console.log("Error de firebase Código"+error.code); //error.code nos mostrará el código de error para informarnos qué pasó
    console.log("Error de firebase Mensaje"+error.message); //error.message nos mostrará el mensaje de firebase del mismo error
});
}