import AboutDoctor from 'ui/AboutDoctor';
import Banner from 'ui/Banner';
import Button from 'ui/Button';

const Home = () => {
  return (
    <main className='relative w-full'>
      <div className='absolute top-1/4 left-10 max-w-2xl'>
        <h1 className='text-7xl text-blue font-extrabold pb-2'>
          <span className='text-black'>Καλώς ήρθατε</span> στο Ιατρείο μας.
        </h1>
        <div className='flex gap-2'>
          <Button variant='primary'>Επικοινωνία</Button>
        </div>
      </div>
      <div className='skata w-full' />
      <Banner />
      <div className='xl:h-36 md:h-[60vh]'></div>
      <AboutDoctor />
    </main>
  );
};

export default Home;
