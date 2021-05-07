var firebaseConfig = {
    apiKey: "AIzaSyB8av2h6x22KTvqbDHmW_5vOTd7cSzvf34",
    authDomain: "super-jumpman-multijugador.firebaseapp.com",
    databaseURL: "https://super-jumpman-multijugador-default-rtdb.firebaseio.com",
    projectId: "super-jumpman-multijugador",
    storageBucket: "super-jumpman-multijugador.appspot.com",
    messagingSenderId: "528604487023",
    appId: "1:528604487023:web:5a772a62f5b7b0c81c9c9a",
    measurementId: "G-5KWTBTGXKC"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var storage = firebase.storage();
var storageRef = firebase.storage().ref();


var image;

document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
 
   document.getElementById('mostrar').addEventListener('click', mostrar);
    document.getElementById('tomarFoto').addEventListener('click', tomarFoto);
    document.getElementById('cargarFoto').addEventListener('click', cargarFoto);
    document.getElementById('SubirImagen').addEventListener('click', SubirImagen);
}

function mostrar() {
    alert('vesion cordova : ' + device.cordova + "\n" +
        'modelo: ' + device.model + "\n" +
        'plataforma: ' + device.platform + "\n");
}

function tomarFoto() {
    navigator.camera.getPicture(onSuccess, onFail, {
        quality: 50,
        destinationType: Camera.DestinationType.DATA_URL
    });
   


    function onSuccess(imageData) {
        image = document.getElementById('myImage');
        image.src = "data:image/jpeg;base64," + imageData;
       
    }

    function onFail(message) {
        alert('Error: ' + message);
    }

}
function SubirImagen(){
  storageRef.child(new Date() + '-' + 'base64').putString(image.src, 'data_url').then(function(snapshot) {

    alert("Image Uploaded")
    console.log('Uploaded a base64 string!');
  });


}

  

  
    
 
