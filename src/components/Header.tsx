import Image from 'next/image';
import Link from "next/link";


const Header = () => {
    return (
        <div className="relative">
            <div className="absolute inset-0">
                <Image
                    src="/images/header-image2.jpg"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    alt="Salon image"
                    className="opacity-100"
                />
                <div className="absolute inset-0 bg-black opacity-10"></div>
            </div>
            <div className="relative container mx-auto px-8 py-24">
                <h1 className="text-4xl font-bold text-white">Welcome to our Salon</h1>
                <p className="mt-4 text-lg text-white max-w-xl">
                    We are a full-service salon dedicated to providing you with an exceptional beauty experience. Whether you&apos;re looking for a simple haircut or a full day of pampering, our team of skilled professionals is here to help you look and feel your best. Come visit us today and let us help you achieve your beauty goals.
                </p>
                <div className="block mt-8">
                <Link href="#" className="uppercase px-2 py-1.5 rounded-md font-display text-amber-200 border-2 border-amber-200">
                    Book now
                </Link>
                </div>
                
            </div>
        </div>
    );
};

export default Header;
