// utils/firebase.js
import firebase from 'firebase/app'
import 'firebase/firestore'

if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        storageBucket: process.env.FIREBASE_storageBucket,
        messagingSenderId: process.env.FIREBASE_messagingSenderId,
        appId: process.env.FIREBASE_appId,
        measurementId: process.env.FIREBASE_measurementId
    })
}

export default firebase