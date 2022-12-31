import { initializeApp } from 'firebase/app';
import { Analytics, getAnalytics } from 'firebase/analytics';

// eslint-disable-next-line import/no-mutable-exports
let analytics: Analytics;

const app = initializeApp({
  apiKey: "AIzaSyCnFxSNRhzfj4t-f7f4RlnLEUabMXnCc0w",
  authDomain: "yoursanonymously-space.firebaseapp.com",
  projectId: "yoursanonymously-space",
  storageBucket: "yoursanonymously-space.appspot.com",
  messagingSenderId: "78080716885",
  appId: "1:78080716885:web:1cfa48b970e736847ee4dc",
  measurementId: "G-NLNYNB8V4J"
});

if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

export { analytics };
