import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC1NmgWhRht8SLtIUW_WokT1EQqh5VGZwU",
  authDomain: "digital-event-2021-c89d3.firebaseapp.com",
  databaseURL: "https://digital-event-2021-c89d3-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "digital-event-2021-c89d3",
  storageBucket: "digital-event-2021-c89d3.appspot.com",
  messagingSenderId: "759587001744",
  appId: "1:759587001744:web:ffd1a763f7373b30ddcf15",
  measurementId: "G-9K94HZL2M6"
};

firebase.initializeApp(firebaseConfig);

export default firebase;