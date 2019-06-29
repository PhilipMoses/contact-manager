import { createStore, combineReducers, compose } from 'redux';
import firebase from 'firebase';
import 'firebase/firestore';
import { reactReduxFirebase, firebaseReducer} from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer } from 'redux-firestore';
// Reducers
// @todo

const firebaseConfig = {
    apiKey: "AIzaSyCOLaW5_Z0bp1qDx9kt5xI4siMYXEoOfB4",
    authDomain: "belsterns.firebaseapp.com",
    databaseURL: "https://belsterns.firebaseio.com",
    projectId: "belsterns",
    storageBucket: "belsterns.appspot.com",
    messagingSenderId: "78289419132"
};

// React Redux Firebase Config
const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};

// Int firebase instance
firebase.initializeApp(firebaseConfig);
// Int firestore
const firestore = firebase.firestore();

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
    reduxFirestore(firebase)
)(createStore);

// Add firebase to reducers
const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer
});

const initialState = {};

// Create Store
const store = createStoreWithFirebase(rootReducer, initialState, compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

export default store;