import Card from 'ui/Card';
import Image from 'next/image';
import SectionTitle from 'ui/SectionTitle';
import { servicesInfo } from 'data/services';
import Link from 'next/link';
import TextToHtml from 'ui/TextToHtml';

const ServicesPage = () => {
  return (
    <main className='flex items-center justify-center mt-6 flex-col'>
      <SectionTitle title='ΟΙ ΥΠΗΡΕΣΙΕΣ ΜΑΣ' />
      <div className='w-2/3 grid  gap-10  justify-center items-start sm:grid-cols-2 md:grid-cols-3 '>
        {servicesInfo.map(service => (
          <Card
            key={service.title}
            className='overflow-x-hidden  w-full col-span-1 hover:scale-105 transition ease-in-out duration-300'
          >
            <figure className='w-full h-[200px] m-h-[200px] relative z-0 brightness-75 transition ease-in-out duration-300 object-cover '>
              <Image className='' alt={service.title} src={service.image} fill />
            </figure>
            <main className='p-5 w-full z-10'>
              <h1 className=' font-extrabold text-2xl mb-4'>{service.title}</h1>
              <span className='break-words leading-6 '>
                <TextToHtml text={service.description} />
              </span>
              <Link href={`/scientific-articles#${service.serviceId}`}>ΠΕΡΙΣΣΟΤΕΡΑ</Link>
            </main>
          </Card>
        ))}
      </div>
    </main>
  );
};

export default ServicesPage;
