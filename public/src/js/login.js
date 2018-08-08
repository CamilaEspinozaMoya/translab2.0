function login(){
  const emailValue = email1.value;
  const passwordValue = password1.value;
  firebase.auth().signInWithEmailAndPassword(emailValue, passwordValue)
      .then(()=>{
          console.log("Usuario con login exitoso");
      })
      .catch((error)=>{
          console.log("Error de firebase > "+error.code);
          console.log("Error de firebase, mensaje > "+error.message);
      });
}

function logout(){
  firebase.auth().signOut()
      .then(()=>{
          console.log("Chao");
      })
      .catch();
}
