'use client';

import SignIn from "@/components/form/sign-in/sign-in";
import MenuAppBar from "@/components/navbar/appbar";
import { signIn } from "@/context/FirebaseContext";
import { useRouter } from "next/navigation";

export default function AuthPage() {
    const router = useRouter();

    return (
        <div>
            <MenuAppBar />
            <SignIn handleSignIn={() => {
                signIn();
                router.push("/dashboard");
            }} />
        </div>
    )
}