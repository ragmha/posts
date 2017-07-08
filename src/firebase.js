import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyDqbPVK8nBHZeURiov-_42f5G2TOpHLpJM",
  authDomain: "posts-d1442.firebaseapp.com",
  databaseURL: "https://posts-d1442.firebaseio.com",
  projectId: "posts-d1442",
  storageBucket: "",
  messagingSenderId: "94604303997"
};

firebase.initializeApp(config);

export const Posts = firebase.database().ref();
