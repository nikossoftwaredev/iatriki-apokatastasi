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
    <div className={`relative w-full flex items-center justify-center `}>
      <div className='absolute -top-1/2 -translate-y-1/2 sm:w-4/5 xl:w-2/3 shadow-lg bg-blue p-14 text-white rounded-lg small'>
        <section className='flex flex-col lg:flex-row gap-4 justify-center'>
          {items.map(item => (
            <div
              key={item.id}
              className='flex gap-5 items-start justify-start lg:items-center lg:justify-center'
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
