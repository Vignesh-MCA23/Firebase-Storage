(function() {
  // Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCT1jxLwrwEp4yxivZiHKJaReZ8G0PzgxA",
    authDomain: "courseo-71b02.firebaseapp.com",
    databaseURL: "https://courseo-71b02-default-rtdb.firebaseio.com",
    projectId: "courseo-71b02",
    storageBucket: "courseo-71b02.appspot.com",
    messagingSenderId: "100836919657",
    appId: "1:100836919657:web:88d2d95620688495ad95f8"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //Root ref
  var storage=firebase.storage();
  var storageRef=storage.ref();
  
  //get UI elements
  const file = document.getElementById('file');
  const upload=document.getElementById('upload');
  const download=document.getElementById('download');
  const status=document.getElementById('status');
  const image=document.getElementById('image');

  //upload file
  upload.addEventListener('click',e=>{
     var ref=storageRef.child('globe');
     let photo=document.getElementById('file').files[0];

     //upload
     ref.put(photo).then(function(snapshot){
        console.log('Upload a blob or file!');
        status.innerHTML='Uploaded blob or file!'
     });
  });

    //download file
    download.addEventListener('click',e=>{
        var ref=storageRef.child('globe');
        
        ref.getDownloadURL().then(function(url){
            image.src=url;
            status.innerHTML='Download blob or file!'
        }).catch(function(error){
            console.log(error)
        });
        
        
        });

}());
    