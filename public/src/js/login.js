window.onload = () =>{
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
    //Si estamos logueados
    bodyLoggin.style.display = "none";
    bodyMenu.style.display = "block";
    console.log("User > "+JSON.stringify(user));
    }else{
    //No estamos logueados
    bodyLoggin.style.display = "block";
    bodyMenu.style.display = "none";
    }
  });
};

function register(){
  const email = document.getElementById('email1').value;
  const password = document.getElementById('password1').value; 
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then(()=>{
    console.log("Usuario registrado");
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
    console.log("Chao");
  })
  .catch();
}

/*
function showPage1(){
    $('#body_loggin').show;
    $('#body_loggin').hide;
}
*/
