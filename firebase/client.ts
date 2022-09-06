import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';
import { getFunctions } from '@firebase/functions';


const firebaseConfig = {
  apiKey: "AIzaSyA1GZ00D1l9kf9Hu7Dk7cjCB0CHVx6QZ4k",
  authDomain: "noboco-8f868.firebaseapp.com",
  projectId: "noboco-8f868",
  storageBucket: "noboco-8f868.appspot.com",
  messagingSenderId: "175976537765",
  appId: "1:175976537765:web:e4c4bc40ace5a5e5b0774c"
};

if (!getApps()?.length) {
  initializeApp(firebaseConfig);
}

export const db = getFirestore();
export const storage = getStorage();
export const auth = getAuth();
export const fns = getFunctions();
