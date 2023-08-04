
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBFCGIFTKSZDynuvjql9OkZNnDLV5moGHw",
  authDomain: "test-6c14f.firebaseapp.com",
  projectId: "test-6c14f",
  storageBucket: "test-6c14f.appspot.com",
  messagingSenderId: "932903633427",
  appId: "1:932903633427:web:2964424d652691879735e6",
  measurementId: "G-8PSEELX8DM"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

/*const users = collection(db, "userInformation");
getDocs(users)
  .then((snapshot) => {
    //console.log(snapshot.docs);
    snapshot.docs.forEach((doc) => {
      console.log(doc.data());
    })
    
  })*/

export { auth, db, app };