import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCtbk8_-kRfaYqSVohvPT15tiFNpmnhrdg',
  authDomain: 'clone-a83cf.firebaseapp.com',
  projectId: 'clone-a83cf',
  storageBucket: 'clone-a83cf.appspot.com',
  messagingSenderId: '744653613762',
  appId: '1:744653613762:web:416fe08f69fea11b7b295b',
  measurementId: 'G-3PH1ELM7V1'
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }
