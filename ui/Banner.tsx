import React from 'react';
import { MdAccessibility } from 'react-icons/md';
import { MdFace } from 'react-icons/md';
import { calculateYears } from 'utils/year';

const items = [
  {
    id: 1,
    icon: <MdAccessibility size={70} />,
    number: calculateYears(),
    description: 'years of experience'
  },
  { id: 2, icon: <MdFace size={70} />, number: 2021, description: 'best of point vedra' },
  { id: 3, icon: <MdAccessibility size={70} />, number: '200+', description: 'happy customers' }
];

const Banner = () => {
  return (
    <div className='relative '>
      <div className='w-full  absolute flex flex-col items-center justify-center xl:-top-[125px] md:-top-[40px]'>
        <div className='xs:4/5 sm:w-4/5 md:w-4/5 lg:3/4 xl:w-2/3 shadow-lg bg-blue p-14 text-white rounded-lg small'>
          <section className='grid xl:grid-flow-col xl:justify-evenly md:row-span-1 md:grid-flow-row md:items-center md:justify-center '>
            {items.map(item => (
              <div key={item.id} className='grid grid-cols-3 md:my-4'>
                <div className='flex justify-center row-span-3 col-span-1'>{item.icon}</div>
                <div className='text-4xl font-bold row-span-1 col-span-2'>{item.number}</div>
                <div className='text-lg py-6  row-span-1 col-span-2'>
                  {item.description.toUpperCase()}
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
