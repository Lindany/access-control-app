import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCYPLnNcHrZEb4PZFAZFS8ai28AMG_bl6A",
    authDomain: "access-control-91beb.firebaseapp.com",
    databaseURL: "https://access-control-91beb.firebaseio.com",
    projectId: "access-control-91beb",
    storageBucket: "access-control-91beb.appspot.com",
    messagingSenderId: "767589913498",
    appId: "1:767589913498:web:dc344eb05ce6ac49b86023",
    measurementId: "G-D61SN32DQS"
  };


  var fire = firebase.initializeApp(firebaseConfig);
  export default fire;