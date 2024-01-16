'use client'

import SignInForm from "@/components/form/sign-in/sign-in";
import MenuAppBar from "@/components/navbar/appbar";
import { authOptions } from "@/lib/auth/auth";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function AuthPage() {
    const router = useRouter();

    function handleSignIn() {
        signIn('google');
        router.push("/dashboard");
    }

    return (
        <div>
            <MenuAppBar />
            <SignInForm handleSignIn={handleSignIn} />
        </div>
    )
}