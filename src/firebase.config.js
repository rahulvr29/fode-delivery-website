import {getApp, getApps, initializeApp} from "firebase/app"
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDFKxnKRgJmhrWTp6aGDhYBCKCgZxy95g8",

  authDomain: "fode-ordering-website.firebaseapp.com",
  projectId: "fode-ordering-website",
  storageBucket: "fode-ordering-website.appspot.com",
  messagingSenderId: "374677551724",
  appId: "1:374677551724:web:d2ab63ee5e85814baa7649",
};


const app = getApps.length > 0? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage};