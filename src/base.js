import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBRQg9RRzZ3DZHLInpfSkDrMU1FEfrA3hE",
    authDomain: "chatbox-app-45a7b.firebaseapp.com",
    databaseURL: "https://chatbox-app-45a7b.firebaseio.com",
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }

export default base