'use client'

import SignInForm from "@/components/form/sign-in/sign-in";
import MenuAppBar from "@/components/navbar/appbar";
import { signIn } from "next-auth/react";
import { usePathname, useSearchParams } from "next/navigation";

export default function AuthPage() {
    const searchParams = useSearchParams();
    const redirect = searchParams.get("redirect");

    async function handleSignIn() {
        await signIn('google', {
            callbackUrl: redirect || '/dashboard'
        });
    }

    return (
        <div>
            <MenuAppBar />
            <SignInForm handleSignIn={handleSignIn} />
        </div>
    )
}