const admin = require('firebase-admin');
const config = require('./config')
const serviceAccount = require("./serviceAccountKey.json")
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://onlyfrags-a97bd.firebaseio.com"
});

const db = admin.firestore();

module.exports = { admin, db };