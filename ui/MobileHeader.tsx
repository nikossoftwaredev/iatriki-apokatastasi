'use client';
import { MdMenu } from 'react-icons/md';
import { usePathname } from 'next/navigation';
import { useCallback } from 'react';

const linksConfig = [
  { path: '/', text: 'Αρχική' },
  { path: '/services', text: 'Υπηρεσίες' },
  { path: '/scientific-articles', text: 'Eπιστημονικά Άρθρα' },
  { path: '/curriculum', text: 'Βιογραφικό' },
  { path: '/contact', text: 'Επικοινωνία' }
];

const MobileHeader = () => {
  const pathname = usePathname();

  const scrollToAppointment = useCallback(() => {
    const appointmentDiv = document.getElementById('appointment-name');

    if (appointmentDiv) {
      appointmentDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
      appointmentDiv.focus();
    }
  }, []);

  return (
    <header>
      <nav className='pb-5 bg-white'>
        <div className='flex flex-wrap justify-end items-end  max-w-screen mb-4 bg-blue gap-7  text-primary-50 py-3 pr-1'>
          <MdMenu className='ml-auto' size={40} />
        </div>
      </nav>
    </header>
  );
};

export default MobileHeader;
