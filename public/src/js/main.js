var db = firebase.firestore();

function agregarTarjeta(){
  const numeroTarjeta = document.getElementById('comment').value;
  document.getElementById('comment').value = '';

  db.collection('tarjeta').add({
    card: numeroTarjeta,
  })
    .then(function(docRef) {
      console.log('Document written with ID: ', docRef.id);
    })
    .catch(function(error) {
      console.error('Error adding document: ', error);
    });
}

// leer documentos
let numeroTarjetaContenedor = document.getElementById('contenedorNumero');
db.collection('tarjeta').onSnapshot((querySnapshot) => {
  numeroTarjetaContenedor.innerHTML = '';
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data().card}`);
    numeroTarjetaContenedor.innerHTML += `
    <div class="card">
      <div class="card-body">
        ${doc.data().card}
      </div>
    </div>
      `
  });
});