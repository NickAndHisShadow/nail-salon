import type { NextPage } from 'next'
import Image from 'next/image';
import Layout from '@/components/Layout'
import Header from '@/components/Header';


const Services: NextPage = () => {
    return (

            <Layout>
                <ServicesSection />
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

const ServicesSection = () => {
    return (

        <div className="container mx-auto py-16">
            <h2 className="text-2xl font-bold mb-8">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {services.map(service => (
                    <div key={service.id} className="flex flex-col md:flex-row items-center justify-center">
                        <div className="md:w-1/2 mb-4 mr-6 md:mb-0">
                            <Image
                                src={service.imageSrc}
                                width={500}
                                height={500}
                                objectFit="cover"
                                alt={service.title}
                            />
                        </div>
                        <div className="md:w-1/2">
                            <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
