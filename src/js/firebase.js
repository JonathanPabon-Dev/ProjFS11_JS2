// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  onAuthStateChanged,
  signInWithRedirect,
  signOut,
} from 'firebase/auth';

import { GoogleAuthProvider } from 'firebase/auth';
import {
  getFirestore,
  addDoc,
  doc,
  deleteDoc,
  collection,
  query,
  where,
  getDocs,
} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAk36pN47e9TyiXdI_dQhLgGsUMyQYNiw0',
  authDomain: 'movie-auth-97cbb.firebaseapp.com',
  projectId: 'movie-auth-97cbb',
  storageBucket: 'movie-auth-97cbb.appspot.com',
  messagingSenderId: '804704371491',
  appId: '1:804704371491:web:40524ad09546d96b344296',
  measurementId: 'G-H5C7DKB0H3',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
auth.languageCode = 'es';

const logOut = () => {
  signOut(auth)
    .then(() => {
      console.log('Cierre de sesión correcto');
    })
    .catch(error => {
      console.error(error);
    });
};

const loginGoogle = () => {
  signInWithRedirect(auth, provider)
    .then(result => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    })
    .catch(error => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};

const checkUserAuth = () => {
  onAuthStateChanged(auth, user => {
    if (user !== null) {
      let data = user.uid;
      return data;
    } else {
      console.log('not logged');
      return;
    }
  });
};

const createMovie = async (movieObject, list) => {
  console.log(movieObject);
  let docRef = '';
  if (list == 1) {
    docRef = await addDoc(collection(db, 'watched'), {
      id: movieObject.id,
      poster_path: movieObject.poster_path,
      title: movieObject.title,
      vote_average: movieObject.vote_average,
      vote_count: movieObject.vote_count,
      original_title: movieObject.original_title,
      popularity: movieObject.popularity,
      overview: movieObject.overview,
      genre_ids: movieObject.genre_ids,
      release_date: movieObject.release_date,
      user_id: auth.currentUser.uid,
    });
  } else if (list == 0) {
    docRef = await addDoc(collection(db, 'queued'), {
      id: movieObject.id,
      poster_path: movieObject.poster_path,
      title: movieObject.title,
      vote_average: movieObject.vote_average,
      vote_count: movieObject.vote_count,
      original_title: movieObject.original_title,
      popularity: movieObject.popularity,
      overview: movieObject.overview,
      genre_ids: movieObject.genre_ids,
      release_date: movieObject.release_date,
      user_id: auth.currentUser.uid,
    });
  }
  console.log('Document written with ID: ', docRef.id);
};

const deleteMovie = async taskId => {
  await deleteDoc(doc(db, 'movie', taskId));
  console.log('deleted');
};

const getMovies = async list => {
  if (list == 1) {
    const q = query(
      collection(db, 'movie'),
      where('user_id', '==', auth.currentUser.uid)
    );
  } else if (list == 0) {
    const q = query(
      collection(db, 'movie'),
      where('user_id', '==', auth.currentUser.uid)
    );
  }
  const querySnapshot = await getDocs(q);
  return querySnapshot;
};

export {
  logOut,
  loginGoogle,
  createMovie,
  getMovies,
  deleteMovie,
  checkUserAuth,
  auth,
};
