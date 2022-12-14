import { ADDRESS, MAIL, PHONE } from 'data/general';
import { cloneElement } from 'react';
import { MdMailOutline, MdOutlinePhone, MdLocationPin } from 'react-icons/md';
import outView from 'public/images/out-view.jpg';
import Image from 'next/image';
import SectionTitle from 'ui/SectionTitle';
import Link from 'next/link';

const contactInfo = [
  {
    icon: (
      <Link href='https://goo.gl/maps/uiR9Q3m2Ag4M9mKAA' target='_blank'>
        <MdLocationPin className='text-blue hover:text-black' size={70} />
      </Link>
    ),
    title: 'Διεύθνση',
    value: ADDRESS
  },
  {
    icon: (
      <Link href={`tel:${PHONE}`}>
        <MdOutlinePhone className='text-blue hover:text-black' size={70} />
      </Link>
    ),
    title: 'Τηλέφωνο',
    value: PHONE
  },
  {
    icon: (
      <Link href={`mailto:${MAIL}`}>
        <MdMailOutline className='text-blue hover:text-black' size={70} />
      </Link>
    ),
    title: 'Email',
    value: MAIL
  }
];

const ContactPage = () => {
  return (
    <main className='flex items-center justify-center p-4'>
      <div className='sm:w-full xl:w-2/4 flex items-center justify-center flex-col gap-2'>
        <SectionTitle title='ΕΠΙΚΟΙΝΩΝΙΑ' className='mt-10' />
        <div className='grid sm:grid-cols-1 md:grid-cols-2 w-full gap-14 items-center justify-center'>
          <span className='flex items-center justify-center'>
            <Image alt='out-view' src={outView} className='object-cover  rounded-lg' />
          </span>
          <div className='flex items-start justify-start gap-4 flex-col'>
            <h1 className='font-extrabold text-2xl'>ΙΑΤΡΙΚΗ ΑΠΟΚΑΤΑΣΤΑΣΗ ΦΥΣΙΚΟΘΕΡΑΠΕΙΑ</h1>
            {contactInfo.map(info => (
              <section key={info.title} className='flex items-center justify-center gap-4'>
                {cloneElement(info.icon)}
                <span className='flex flex-col gap-2'>
                  <p className='font-extrabold'>{info.title}</p>
                  <p> {info.value}</p>
                </span>
              </section>
            ))}
          </div>
          <div className='col-span-full'>
            <iframe
              title='map'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3146.9871647693208!2d23.7547994!3d37.9307303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bd8c56b4503f%3A0x5d6c464600d258f1!2sOdissea%20Androutsou%2022%2C%20Ilioupoli%20163%2041!5e0!3m2!1sen!2sgr!4v1668618908141!5m2!1sen!2sgr'
              className='rounded-lg border-hidden'
              width='100%'
              height='400px'
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
