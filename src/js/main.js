// Firebase tarjeta
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

// Mostrar numero tarjeta en pantalla
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

// Mostrar numero tarjeta en select
const selectorContenedor = document.getElementById('inputGroupSelect01');
db.collection('tarjeta').onSnapshot((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data().card}`);
    selectorContenedor.innerHTML += `
    <option value="${doc.data().card}">${doc.data().card}</option>
      `
  });
});

const selectorContenedor2 = document.getElementById('inputGroupSelect02');
db.collection('tarjeta').onSnapshot((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data().card}`);
    selectorContenedor2.innerHTML += `
    <option value="${doc.data().card}">${doc.data().card}</option>
      `
  });
});

// Deshabilitar input
function select(){
  const inputTexto = document.getElementById('hola');
    if (selectorContenedor.value.length > 0) {
      inputTexto.disabled = true;
    } else {
      inputTexto.disabled = false;
    }
};

function select2(){
  const inputTexto2 = document.getElementById('hola2');
    if (selectorContenedor2.value.length > 0) {
      inputTexto2.disabled = true;
    } else {
      inputTexto2.disabled = false;
    }
};

// ver saldo
function saldo(){
  const inputTexto = document.getElementById('hola');
  const selectorContenedor = document.getElementById('inputGroupSelect01');
  const contenedorSaldo = document.getElementById('contenedorSaldo');

  if (inputTexto.length > 0 || selectorContenedor.length > 0) {
    let ntarjeta = inputTexto.value || selectorContenedor.value;
    inputTexto.value = '';
    selectorContenedor.value = '';

    fetch(`https://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=${ntarjeta}`)
    .then(response => response.json())
    .then(data => {
    
      let saldo = data.saldoTarjeta;
      contenedorSaldo.innerHTML = saldo;
      
    })
    .catch(()=>{
      console.error("No fue posible completar la solicitud.");
    });
  }
}

function calcular(){
  const inputTexto2 = document.getElementById('hola2');
  const selectorHorario = document.getElementById('inputGroupSelect03').value;
  const selectorContenedor2 = document.getElementById('inputGroupSelect02');
  const contenedorPasaje = document.getElementById('costoPasaje');
  const contenedorSaldoFinal = document.getElementById('saldoFinal');

  if (inputTexto2.length > 0 || selectorContenedor2.length > 0) {
    let ntarjeta2 = inputTexto2.value || selectorContenedor2.value;
    inputTexto2.value = '';
    selectorContenedor2.value = '';

    fetch(`https://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=${ntarjeta2}`)
    .then(response => response.json())
    .then(data => {
      const expression = /(\d+)/g;
      const dataBip = data.saldoTarjeta.match(expression);
      const dataFinalBip = parseInt(dataBip[0] + dataBip[1]);
      let calculo = dataFinalBip - selectorHorario;
      contenedorPasaje.innerHTML = '$' + selectorHorario;
      contenedorSaldoFinal.innerHTML = '$' + calculo;
      
    })
    .catch(()=>{
      console.error("No fue posible completar la solicitud.");
    });
  }

}

