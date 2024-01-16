'use client';

import { GoogleAuthProvider, OAuthCredential, User, UserCredential, getRedirectResult, onAuthStateChanged, signInWithRedirect, signOut } from "firebase/auth";
import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { auth } from "@/lib/firebase/firebase";
import { useRouter } from "next/navigation";

export type ContextType = {
    user: User | null,
    signIn: () => void,
    signOut: () => void
}
export type Props = { children: ReactNode }

export const AuthContext = createContext<ContextType>({
    user: null,
    signIn: () => { },
    signOut() { },
})

export function signIn() {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider).then((userCredential) => {
        const credential: OAuthCredential | null = GoogleAuthProvider.credentialFromResult(userCredential);
    });
};

export default function AuthProvider({ children }: Props) {
    const [currentUser, setcurrentUser] = useState<User | null>(null);
    const [loading, setloading] = useState<boolean>(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setcurrentUser(user || null);
            setloading(false);
        });

        // unsubscribe to the listener when unmounting
        return () => unsubscribe();
    });

    const handleSignOut = async () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            setcurrentUser(null);
            console.log('Sign-out successful.');
        })
    };

    const value = {
        user: currentUser,
        signIn,
        signOut: handleSignOut,
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

export function getCurrentUser() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useFirebaseAuth must be used within a FirebaseAuthProvider");
    }
    return context.user;
}

export function UserName() {
    const user = getCurrentUser();
    return <div>{user?.displayName || "unauthenticated"}</div>;
}

export function UserEmail() {
    const user = getCurrentUser();
    return <div>{user?.email || "-"}</div>;
}