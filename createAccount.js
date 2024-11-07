// createAccount.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-firestore.js";
import { firebaseConfig } from './firebase-config.js';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

function validate() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm_password').value;
    const email = document.getElementById('email').value;
    const firstName = document.getElementById('first_name').value;
    const lastName = document.getElementById('last_name').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return false;
    }

    return { username, password, email, firstName, lastName };
}

document.getElementById('create-account-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = validate();
    if (!formData) {
        return;
    }

    const { username, password, email, firstName, lastName } = formData;

    try {
        console.log('Creating user...');
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        console.log('Storing user data in Firestore...');
        await setDoc(doc(db, 'users', user.uid), {
            username: username,
            email: email,
            firstName: firstName,
            lastName: lastName
        });

        console.log('User created:', user);
        window.location.href = 'interests.html';
    } catch (error) {
        console.error('Error creating user:', error, error.code);
        alert('Error creating account: ' + error.message);
    }
});