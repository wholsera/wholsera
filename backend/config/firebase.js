const admin = require("firebase-admin");
const serviceAccount = JSON.parse(process.env.LEARNING_FIREBASE);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "wholsera-fa34d.firebasestorage.app"
});

const bucket = admin.storage().bucket();

module.exports = bucket;