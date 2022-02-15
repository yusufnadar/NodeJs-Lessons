
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-app.js";
import { getFirestore, collection, getDocs ,addDoc,doc,deleteDoc,updateDoc,onSnapshot } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdDW8eXRqKui1wTEwG2qJDmledVhyGRcU",
  authDomain: "javascript-eb8ac.firebaseapp.com",
  projectId: "javascript-eb8ac",
  storageBucket: "javascript-eb8ac.appspot.com",
  messagingSenderId: "772855219362",
  appId: "1:772855219362:web:ec70ab2ca3c0ca1a2bc3fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();
const users = collection(db, 'users');
    async function method() {
      const snapshot = await getDocs(users);
      const userList = snapshot.docs.map(doc => doc.data());
      console.log(userList[0].name);
    } 

method();

async function work(){
    const db = getFirestore();
    const unsub = onSnapshot(doc(db, "users", "1"), (doc) => {
        console.log("Current data: ", doc.data());
    });
    /* const washingtonRef = doc(db, "users", "1");
    await updateDoc(washingtonRef, {
        id: 2
      }); */
    /* await addDoc(collection(db,'users'),{
        name:'Burak',
        id:'2'
    }); */
    // await deleteDoc(doc(db, "users", "1"));
}

work();
