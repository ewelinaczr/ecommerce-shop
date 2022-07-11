// 1. get firebase config - connect file with firebase
import { initializeApp } from "firebase/app";
// 4. Micro libraries to set up - log in server
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
	User,
	NextOrObserver,
} from "firebase/auth";
// 7. Authentication server
// doc - search for data, getDoc-accesss setDoc-write
import {
	getFirestore,
	doc,
	getDoc,
	setDoc,
	// put data to forebase
	collection,
	writeBatch,
	// read data from firebase
	query,
	getDocs,
	QueryDocumentSnapshot,
} from "firebase/firestore";
import { Category } from "../../store/categories/category.types";

// 2. Identify firebase database with key / id - copied from fb
const firebaseConfig = {
	apiKey: "AIzaSyCM90ay6A4prlYCqR2t8OyfdsqeB6ZiigI",
	authDomain: "ecommerce-shop-40042.firebaseapp.com",
	projectId: "ecommerce-shop-40042",
	storageBucket: "ecommerce-shop-40042.appspot.com",
	messagingSenderId: "38615575515",
	appId: "1:38615575515:web:78aee4bc2907e793ba15fe",
};

// 3. Initialize Firebase App
const firebaseApp = initializeApp(firebaseConfig);

// SIGN IN WITH GOOGLE
// 5. Set authentication
// Provider configuration - instructions
// Google auth - Select account
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
	prompt: "select_account",
});

// 6. Set up
// authentication from same server - one
export const auth = getAuth();
// sign in with different providers - differnt
// google
export const signInWithGooglePopup = () =>
	signInWithPopup(auth, googleProvider);
// redirect
export const signInWithGoogleRedirect = () =>
	signInWithRedirect(auth, googleProvider);

//  8.Create authentication database - list of users - list of products
export const db = getFirestore();

// DATABASE SET UP
// Set up new collection in database
// asymc - calling Api to store data
// ADD DATABASE TO FIREBASE
export type ObjectToAdd = {
	title: string;
};
export const addCollectionAndDocuments = async <T extends ObjectToAdd>(
	collectionKey: string,
	objectsToAdd: T[]
): Promise<void> => {
	// create collection
	const collectionRef = collection(db, collectionKey);
	// all doc successfully added
	const batch = writeBatch(db);

	objectsToAdd.forEach((object) => {
		// create db {object} reference for each shop category(tittle)
		const docRef = doc(collectionRef, object.title.toLowerCase());
		batch.set(docRef, object);
	});

	await batch.commit();
	console.log("done");
};

// READ FIRESTORE DATABASE
export const getCategoriesAndDocuments = async (): Promise<Category[]> => {
	const collectionRef = collection(db, "categories");
	// generate query
	const q = query(collectionRef);
	// get query data
	const querySnapshot = await getDocs(q);
	// mapping all cattegories to get products groups titles
	// gives back categoriesArray
	return querySnapshot.docs.map(
		(docSnapshot) => docSnapshot.data() as Category
	);
};

// AUTHENTICATION & STORAGE OF USERS //
export type additionalInformation = {
	// displayName: string;
};
export type UserData = {
	createdAt: Date;
	displayName: string;
	email: string;
};
// 9. take data form auth server and store in database
export const createUserDocumentFromAuth = async (
	userAuth: User,
	additionalInformation = {} as additionalInformation
): Promise<void | QueryDocumentSnapshot<UserData>> => {
	// if no authentication is invalid return else create user
	if (!userAuth) return;
	// set user in db in collection users with id from user access token
	const userDocRef = doc(db, "users", userAuth.uid);
	// get data of user from db collection
	const userSnapshot = await getDoc(userDocRef);
	// check if user already exists - it dosn't
	// user doesn't exist yet - first log in
	// false - first time / true
	// if user snapshot dosn't exist - create it
	if (!userSnapshot.exists()) {
		// Take data from user auth
		const { displayName, email } = userAuth;
		// Create date
		const createdAt = new Date();
		// Set new user snapshot
		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
				...additionalInformation,
			});
		} catch (error) {
			console.log("error creating the user", error);
		}
	}
	// if user snapshot exist - get it
	return userSnapshot as QueryDocumentSnapshot<UserData>;
};

// SIGN IN WITH EMAIL / PASSWORD
// create user - sign up
export const createAuthUserWithEmailAndPassword = async (
	email: string,
	password: string
) => {
	if (!email || !password) return;
	return await createUserWithEmailAndPassword(auth, email, password);
};
// user sign in
export const signInAuthUserWithEmailAndPassword = async (
	email: string,
	password: string
) => {
	if (!email || !password) return;
	return await signInWithEmailAndPassword(auth, email, password);
};

// SIGN OUT
export const signOutUser = async () => await signOut(auth);
// return listener to check log in / log out
// callback - to call every time auth changes
export const onAuthStateChangedListener = (callback: NextOrObserver<User>) =>
	onAuthStateChanged(auth, callback);
