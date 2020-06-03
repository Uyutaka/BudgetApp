import * as firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {firebase, googleAuthProvider, database as default};
// database.ref('expenses').push({
//     description: 'Rent',
//     note: 'First',
//     amount: 345,
//     createdAt: 345342
// })
// database.ref('expenses').push({
//     description: 'Food',
//     note: 'Second',
//     amount: 34500,
//     createdAt: 345342
// })
// database.ref('expenses').push({
//     description: 'Utility Bill',
//     note: 'Third',
//     amount: 345000,
//     createdAt: 345342
// })

// database.ref('expenses').on('value',(snapshot)=>{
//     const expenses = [];
//     snapshot.forEach((childSnapshot)=>{
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })
//     console.log(expenses);
// })
