import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyDpKCgYiltXuDLWBgakAf-1dKSh32WboFE",
	authDomain: "gym-app-e064d.firebaseapp.com",
	projectId: "gym-app-e064d",
	storageBucket: "gym-app-e064d.appspot.com",
	messagingSenderId: "923407278038",
	appId: "1:923407278038:web:47649bf47f1e7fac5b8e77",
	measurementId: "G-MY9N90XFP8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;