import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_storageBucket,
  messagingSenderId: process.env.FIREBASE_messagingSenderId,
  appId: process.env.FIREBASE_appId,
  measurementId: process.env.FIREBASE_measurementId,
};

let firebaseApp;

if (!firebase.default.apps.length) {
  firebaseApp = firebase.default.initializeApp(firebaseConfig);
} else {
  firebaseApp = firebase.default.app();
}

export const fs = firebaseApp.firestore();

export default {
  auth: firebase.default.auth(),
  // loginGoogle(): void {
  //   const provider = new firebase.default.auth.GoogleAuthProvider();
  //   firebase.default
  //     .auth()
  //     .signInWithPopup(provider)
  //     .then(function (response) {
  //       const firstResponse = response;

  //       checkIfUserExists(response.user.uid).then((response: { success: boolean }) => {
  //         if (!response.success) {
  //           const payload = {
  //             uid: firstResponse.user.uid,
  //             email: firstResponse.user.email,
  //             roles: ['user'],
  //           };
  //         }
  //       });
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // },
  logout(): void {
    firebase.default
      .auth()
      .signOut()
      .catch(function (error) {
        console.log(error);
      });
  },
  signUpEmail(email: string, password: string): Promise<{}> {
    return new Promise((resolve, reject) => {
      firebase.default
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((response) => {
          const payload = {
            uid: response.user?.uid,
            email: response.user?.email,
            roles: ['user'],
          };
          console.log({ payload });
          resolve({ success: true });
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  loginEmail(email: string, password: string): Promise<Record<string, unknown>> {
    return new Promise((resolve, reject) => {
      firebase.default
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          resolve({ success: true });
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  sendResetPassEmail(emailAddress: string): Promise<Record<string, unknown>> {
    return new Promise((resolve, reject) => {
      firebase.default
        .auth()
        .sendPasswordResetEmail(emailAddress)
        .then(() => {
          resolve({ success: true });
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  setAuthChange(): void {
    // let user: User = {
    //   loggedIn: false,
    // };
    // firebase.default.auth().onAuthStateChanged((userfb) => {
    //   if (userfb) {
    //     const uid: string = userfb.uid;
    //   } else {
    //     user = {
    //       loggedIn: false,
    //     };
    //   }
    // });
  },
};

const checkIfUserExists = (userUid: string): Promise<Record<string, unknown>> => {
  let exists: boolean;

  return new Promise((resolve, reject) => {
    fs.ref(`users/${userUid}`)
      .once('value', function (snapshot) {
        exists = snapshot.val() !== null;
      })
      .then(() => {
        resolve({ success: exists });
      })
      .catch((error) => {
        reject(error);
      });
  });
};
