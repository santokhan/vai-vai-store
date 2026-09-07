import Link from "next/link";

export default function MobiledokanAd() {
    return (
        <aside
            aria-label="Mobiledokan.pro promotion"
            className="relative isolate overflow-hidden bg-slate-950"
        >
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_30%,rgba(34,211,238,0.22),transparent_32%),radial-gradient(circle_at_85%_0%,rgba(168,85,247,0.25),transparent_38%)]" />
            <div className="mx-auto flex max-w-screen-xl flex-col items-start gap-6 px-5 py-7 sm:px-8 md:flex-row md:items-center md:justify-between md:py-8">
                <div className="flex items-start gap-4 sm:items-center">
                    <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/30 bg-cyan-300/10 text-cyan-200 shadow-[0_0_30px_rgba(34,211,238,0.18)] sm:flex">
                        <svg aria-hidden="true" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.7">
                            <rect x="7" y="2.75" width="10" height="18.5" rx="2" />
                            <path strokeLinecap="round" d="M10 5.75h4M10.5 18.25h3" />
                        </svg>
                    </div>
                    <div>
                        <p className="mb-1 text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">
                            Recommended for phone lovers
                        </p>
                        <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                            Find your next phone at <span className="text-cyan-300">Mobiledokan.pro</span>
                        </h2>
                        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
                            Compare the latest smartphones, check specifications, and make a smarter choice before you buy.
                        </p>
                    </div>
                </div>

                <Link
                    href="https://mobiledokan.pro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-950/40 transition hover:-translate-y-0.5 hover:bg-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:ring-offset-2 focus:ring-offset-slate-950"
                >
                    Explore now
                    <svg aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
                    </svg>
                </Link>
            </div>
        </aside>
    );
}