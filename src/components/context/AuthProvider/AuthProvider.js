import React, { createContext, useEffect, useState } from 'react';
import app from '../../../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateCurrentUser, updateProfile } from 'firebase/auth';

export const AuthContext = createContext();


const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const loginWithProvider = (provider) => {
        return signInWithPopup(auth, provider);
    }

    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        return signOut(auth);
    }

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);

    }

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('user inside state change', currentUser);
            if (currentUser === null || currentUser.uid) {
                setUser(currentUser);
            }
        })
        return () => {
            unsubscribe();
        }
    }, []);

    const contextInfo = { user, loginWithProvider, logOut, logIn, createUser, updateUserProfile };
    return (
        <div>
            <AuthContext.Provider value={contextInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;