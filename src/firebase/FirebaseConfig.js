import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDth95br0fiT7M-lDBb6XoKJFopsgCDXC8',
  authDomain: 'c-project-74761.firebaseapp.com',
  projectId: 'c-project-74761',
  storageBucket: 'c-project-74761.appspot.com',
  messagingSenderId: '155443981616',
  appId: '1:155443981616:web:0754ccdbd4c517f190acf5',
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
