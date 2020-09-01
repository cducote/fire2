// users.js

const { admin, db } = require('../util/admin');
// const config = require('../util/config');
const firebaseConfig = {
    apiKey: "AIzaSyAcAx4wmBVZilwvs89TsgG4I2ZCNfOPYF8",
    authDomain: "onlyfrags-a97bd.firebaseapp.com",
    databaseURL: "https://onlyfrags-a97bd.firebaseio.com",
    projectId: "onlyfrags-a97bd",
    storageBucket: "onlyfrags-a97bd.appspot.com",
    messagingSenderId: "739568356197",
    appId: "1:739568356197:web:c4c70cda77bc4fc183ef8c",
    measurementId: "G-3FCWYFF6Q5"
  };

const firebase = require('firebase');

firebase.initializeApp(firebaseConfig);

const { validateLoginData, validateSignUpData } = require('../util/validators');

// Login
exports.loginUser = (request, response) => {
    const user = {
        email: request.body.email,
        password: request.body.password
    }

    const { valid, errors } = validateLoginData(user);
	if (!valid) return response.status(400).json(errors);

    firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then((data) => {
            return data.user.getIdToken();
        })
        .then((token) => {
            return response.json({ token });
        })
        .catch((error) => {
            console.error(error);
            return response.status(403).json({ general: 'wrong credentials, please try again'});
        })
};