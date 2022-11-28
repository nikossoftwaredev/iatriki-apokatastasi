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
    <div className={`w-full flex flex-col items-center justify-center relative `}>
      <div className='xs:4/5 sm:w-4/5 md:w-4/5 lg:4/5 xl:w-2/3 shadow-lg bg-blue p-14 text-white rounded-lg small'>
        <section className='grid xl:grid-flow-col xl:justify-evenly md:row-span-1 md:grid-flow-row md:items-start md:justify-start '>
          {items.map(item => (
            <div
              key={item.id}
              className='flex gap-5 md:my-4 items-start justify-center md:items-start md:justify-start'
            >
              {item.icon}
              <div className='flex justify-start items-start flex-col gap-2'>
                <div className='text-4xl font-extrabold'>{item.number}</div>
                <div className='text-lg '>{item.description.toUpperCase()}</div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Banner;
