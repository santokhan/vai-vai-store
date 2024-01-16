import MenuAppBar from "@/components/navbar/appbar";
import { Button } from "@mui/material";

export default function Home() {
    return (
        <main className="">
            <MenuAppBar />
            <div className="flex justify-center py-20">
                <Button href="/dashboard" variant="contained">
                    <span className="font-medium">Go to dashboard</span>
                </Button>
            </div>
        </main>
    )
}

