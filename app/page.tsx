import Footer from "@/block/footer/footer";
import MenuAppBar from "@/components/navbar/appbar";
import NextAuthProvider from "@/context/AuthProvider";
import Image from "next/image";
import Link from "next/link";
import PhonesImage from '@/assets/images/phones.png';

export default function Home() {
    return (
        <NextAuthProvider>
            <main className="">
                <MenuAppBar />
                <section className="bg-white">
                    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-20 lg:grid-cols-12">
                        <div className="mr-auto place-self-center lg:col-span-7">
                            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-[1.25] md:text-5xl xl:text-6xl+ capitalize">সাশ্রয়ী মূল্যে স্মার্টফোন কিনতে চলে আসুন ভাই ভাই টেলিকমে</h1>
                            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">একমাত্র আমরাই দিচ্ছি সুলভ মূল্যে অ্যান্ড্রয়েড ফোন, বাটন ফোন, সাথে আরও রয়েছে অন্যান্য এক্সেসরিজ। যেমন হেডফোন ব্যাটারি চার্জার কাবার মোবাইল সার্ভিসিং।</p>
                            <Link href="/dashboard" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300">
                                ড্যাশবোর্ডে যান
                                <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </Link>
                            {/* <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100">
                                Speak to Sales
                            </a> */}
                        </div>
                        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                            <Image src={PhonesImage} alt="mockup" className="w-full" />
                        </div>
                    </div>
                </section>
            </main>
            <hr />
            <Footer />
        </NextAuthProvider>
    )
}

