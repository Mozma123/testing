
import React from 'react';
import { signInWithPopup, signOut } from 'firebase/auth';
import { loginWithGoogle, auth, db } from '../config/firebase'; 
import { useAuthState } from 'react-firebase-hooks/auth';
import { doc, setDoc } from 'firebase/firestore'; // Firestore functions
import myImage from '../asetes/myImage.png'; 
import Navbar from '../components/navbar';
import Footer from '../components/footer';

function Login() {
  const [user, loading] = useAuthState(auth);

  // Google Login
  async function handleLogin() {
    try {
      const result = await signInWithPopup(auth, loginWithGoogle);
      const user = result.user;

      // Store user details in Firestore
      await setDoc(doc(db, 'users', user.uid), {
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
      });
    } catch (error) {
      console.error("Error during login:", error);
    }
  }

  // Logout
  async function handleLogout() {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error during logout:", error);
    }
  }

  return (
    <>
      <Navbar user={user} handleLogout={handleLogout} /> {/* Pass user and handleLogout */}
      <div className="login-container">
        <h2>Login Form</h2>

        {/* Email and Password inputs */}
        <div className="form-group">
          <input type="email" placeholder="Email" className="form-input" />
          <input type="password" placeholder="Password" className="form-input" />
        </div>

        {/* Button container for submit and login with Google */}
        <div className="button-group">
          <button className="submit-button">Submit</button>
          <button onClick={handleLogin} className="login-button">Login with Google</button>
        </div>

        {/* If user is logged in, display image and name with logout button */}
        {user ? (
          <div className="user-info">
            <button onClick={handleLogout} className="logout-button">Logout</button>
          </div>
        ) : null}

        {/* Loading state */}
        {loading && <p>Loading...</p>}
      </div>
      <Footer />
    </>
  );
}

export default Login;