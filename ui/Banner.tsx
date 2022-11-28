import { servicesInfo } from 'data/services';
import React from 'react';
import { MdVerifiedUser, MdMedicalServices, MdSentimentVerySatisfied } from 'react-icons/md';
import { calculateYears } from 'utils/year';

const items = [
  {
    id: 1,
    icon: <MdVerifiedUser size={80} />,
    number: calculateYears(),
    description: 'Xρονια λειτουργιας'
  },
  {
    id: 2,
    icon: <MdMedicalServices size={80} />,
    number: servicesInfo.length,
    description: 'εξειδικευμενες υπηρεσιες'
  },
  {
    id: 3,
    icon: <MdSentimentVerySatisfied size={80} />,
    number: '2000+',
    description: 'Ευχαριστημενοι πελατες'
  }
];

const Banner = () => {
  return (
    <div className='relative'>
      <div className='w-full flex flex-col items-center justify-center xl:-top-[125px] md:-top-[40px]'>
        <div className='xs:4/5 sm:w-4/5 md:w-4/5 lg:4/5 xl:w-2/3 shadow-lg bg-blue p-14 text-white rounded-lg small'>
          <section className='grid xl:grid-flow-col xl:justify-evenly md:row-span-1 md:grid-flow-row md:items-center md:justify-center '>
            {items.map(item => (
              <div key={item.id} className='flex gap-5 md:my-4 items-center justify-center'>
                {item.icon}
                <div className='flex justify-start items-start flex-col'>
                  <div className='text-4xl font-extrabold'>{item.number}</div>
                  <div className='text-lg py-6'>{item.description.toUpperCase()}</div>
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Banner;
