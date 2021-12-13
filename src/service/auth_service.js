// import firebase from 'firebase';
// // import firebase from 'firebase/compat/app'
// // import firebaseApp from './firebase'


// // class AuthService {
// //     login(providerName){
// //         const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
// //         return firebaseApp.auth().signInWithPopup(authProvider);
// //     }

  
// // }

// // export default AuthService;

// // import firebase from 'firebase';
// import firebaseApp from './firebase';

// class AuthService {
//   login(providerName) {
//     const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
//     return firebaseApp.auth().signInWithPopup(authProvider);
//   }
// }

import firebase from 'firebase';
import firebaseApp from './firebase';

class AuthService {
  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebaseApp.auth().signInWithPopup(authProvider);
  }
}

export default AuthService;


// export default AuthService;