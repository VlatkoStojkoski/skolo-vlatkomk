import { initializeApp } from "firebase/app";
import { getFirestore, enableIndexedDbPersistence } from "firebase/firestore";


const firebaseConfig = {
	apiKey: "AIzaSyAJHFyBPa2yNEkpnFbbHzGZepFrIUPHNvA",
	authDomain: "skolo-vlatkomk.firebaseapp.com",
	projectId: "skolo-vlatkomk",
	storageBucket: "skolo-vlatkomk.appspot.com",
	messagingSenderId: "234056185193",
	appId: "1:234056185193:web:fcd65c95e099517287b9f8",
	measurementId: "G-GJM7P7TMMB"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
enableIndexedDbPersistence(db).catch(console.error);
export { db };