import Typography from '@mui/material/Typography';
import Link from 'next/link';
import LogoImg from '@/assets/images/logo.png'
import Image from 'next/image';

export default function Logo({ className }: { className?: string }) {

    return (
        <div className="w-full">
            <Link href="/" className={`flex items-center gap-2 ${className}`}>
                <Image src={LogoImg} alt="logo" className='w-10 h-10 rounded-full' />
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className='font-semibold'>
                    ভাই ভাই টেলিকম
                </Typography>
            </Link>
        </div>
    );
}