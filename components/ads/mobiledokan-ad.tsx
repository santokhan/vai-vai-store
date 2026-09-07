import Link from "next/link";

export default function MobiledokanAd() {
    return (
        <aside aria-label="ভাই ভাই পয়েন্ট অব সেল সফটওয়্যার" className="mx-auto my-8 max-w-screen-lg overflow-hidden rounded-2xl bg-slate-950 shadow-lg">
            <div className="relative isolate">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_30%,rgba(34,211,238,0.22),transparent_32%),radial-gradient(circle_at_85%_0%,rgba(99,102,241,0.25),transparent_38%)]" />
                <div className="mx-auto flex max-w-screen-xl flex-col items-start gap-4 px-5 py-5 sm:px-7 md:flex-row md:items-center md:justify-between md:py-6">
                    <div>
                        <p className="mb-1 text-xs font-bold uppercase tracking-[0.16em] text-cyan-300">রিটেইল ব্যবসার জন্য পয়েন্ট অব সেল সফটওয়্যার</p>
                        <h2 className="text-xl font-extrabold tracking-tight text-white sm:text-2xl">একটি শক্তিশালী ওয়ার্কস্পেসে আপনার ব্যবসা পরিচালনা করুন।</h2>
                        <p className="mt-1 max-w-2xl text-sm leading-5 text-slate-300">ভাই ভাই POS-এর মাধ্যমে পণ্য, স্টক, বিক্রয়, গ্রাহক, ইনভয়েস, খরচ এবং রিপোর্ট একসাথে পরিচালনা করুন।</p>
                    </div>
                    <Link href="/dashboard" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-200">
                        POS ওয়ার্কস্পেস খুলুন <span aria-hidden="true">→</span>
                    </Link>
                </div>
            </div>
        </aside>
    );
}