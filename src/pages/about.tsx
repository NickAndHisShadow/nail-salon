import Image from "next/image";
import type { NextPage } from 'next'
import Layout from '@/components/Layout'

const About: NextPage = () => {
    return (
        <Layout>
            <div className="container mx-auto py-16">
        <h1 className="text-3xl font-bold mb-8">About Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="mb-8">
            <p className="text-lg mb-4">
              We are a locally owned and operated nail salon located in the heart of downtown. Our team of experienced nail technicians are dedicated to providing you with high-quality services in a clean and relaxing environment.
            </p>
            <p className="text-lg mb-4">
              We offer a wide range of services including manicures, pedicures, gel polish, acrylic nails, nail art, and paraffin wax. We use only the best products and techniques to ensure that your nails look and feel their best.
            </p>
            <p className="text-lg">
              At our salon, we prioritize cleanliness and safety above all else. We use hospital-grade disinfectants and sterilize all of our equipment after every use to ensure that you have a safe and healthy experience with us.
            </p>
          </div>
          <div className="mb-8">
            <Image src="/images/about-image.jpg" width={500} height={500} alt="About Us" className="w-full" />
          </div>
        </div>
      </div>
        </Layout>
      
    );
  };
  
  export default About;
  