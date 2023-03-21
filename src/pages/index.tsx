import Layout from '@/components/Layout'
import Header from '@/components/Header';
import type { NextPage } from 'next'
import Link from "next/link";

import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <Layout>
      <Header />
      <section className="container mx-auto">
        <div className="py-16">
          <h3 className="text-center text-3xl font-bold mb-8">Our services</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map(service => (
              <div key={service.id} className="relative group">
                <Image
                  src={service.imageSrc}
                  width={500}
                  height={500}
                  objectFit="cover"
                  alt={service.title}
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-500 bg-gray-900 bg-opacity-60">
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-white">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="block mt-8 text-center">
            <Link href="/services" className="uppercase px-2 py-1.5 font-display text-green-700 border-b-2 border-green-700 ">
              Read more
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}


const services = [
  {
    id: 1,
    title: 'Manicure',
    imageSrc: '/images/manicure.jpg',
    description: 'Our manicures include nail trimming and shaping, cuticle care, hand massage, and your choice of polish color.'
  },
  {
    id: 2,
    title: 'Pedicure',
    imageSrc: '/images/pedicure.jpg',
    description: 'Our pedicures include a foot soak, nail trimming and shaping, cuticle care, foot massage, and your choice of polish color.'
  },
  {
    id: 3,
    title: 'Gel Polish',
    imageSrc: '/images/gel-polish.jpg',
    description: 'Our gel polish services provide a longer-lasting alternative to traditional nail polish, with a variety of colors to choose from.'
  },
  {
    id: 4,
    title: 'Acrylic Nails',
    imageSrc: '/images/acrylic-nails.jpg',
    description: 'Our acrylic nail services give you the look of longer, stronger nails with a variety of shapes and designs to choose from.'
  },
  {
    id: 5,
    title: 'Nail Art',
    imageSrc: '/images/nail-art.jpg',
    description: 'Our nail art services allow you to express your individual style with custom designs and colors.'
  },
  {
    id: 6,
    title: 'Paraffin Wax',
    imageSrc: '/images/paraffin-wax.jpg',
    description: 'Our paraffin wax services provide deep moisturizing for dry, cracked skin on the hands and feet.'
  },
];


export default Home
