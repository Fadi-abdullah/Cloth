import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDeh9CNUEWIffgKeliTpiaLC71NQda01v8',
  authDomain: 'crown-clothing-db-a2f12.firebaseapp.com',
  projectId: 'crown-clothing-db-a2f12',
  storageBucket: 'crown-clothing-db-a2f12.appspot.com',
  messagingSenderId: '33585573314',
  appId: '1:33585573314:web:8e7a29038e00f496d2ba5b',
};

const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth();
export const createUser = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
export const signInUser = async (email, password) => {
  if (!email || !password) return;
  return signInWithEmailAndPassword(auth, email, password);
};

export const googleAuthState = (callback) => onAuthStateChanged(auth, callback);

export const signOutUser = () => signOut(auth);

const db = getFirestore();
export const createOrGetUserDoc = async (user, otherInfo = {}) => {
  if (!user) return;
  const userDocRef = doc(db, 'Users', user.uid);
  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { displayName, email } = user;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, { displayName, email, createdAt, ...otherInfo });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};
