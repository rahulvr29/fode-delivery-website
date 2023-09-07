import {getApp, getApps, initializeApp} from "firebase/app"
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDTtfMLMs5WPUMrJvXkJyOfa9M_sxKsr-Y",
  authDomain: "fode-delivery-app.firebaseapp.com",
  databaseURL: "https://fode-delivery-app-default-rtdb.firebaseio.com",
  projectId: "fode-delivery-app",
  storageBucket: "fode-delivery-app.appspot.com",
  messagingSenderId: "274661360477",
  appId: "1:274661360477:web:25e0eed7e25385b4029eb4",
  measurementId: "G-Z9MQKFPYP2"
};


const app = getApps.length > 0? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage};