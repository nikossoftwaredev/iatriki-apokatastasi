const SectionTitle = ({
  title = '',
  className = ''
}: {
  title: string;
  className?: string;
}): JSX.Element => {
  return (
    <div className={`w-full flex items-center justify-center mb-6 ${className}`}>
      <div className='sm:w-full md:w-2/4 flex items-center justify-center'>
        <div className='h-0 border-t-2 flex-grow border-blue' />
        <h1 className='font-black text-3xl text-blue text-center mx-3'>{title}</h1>
        <div className='h-0 border-t-2 flex-grow border-blue' />
      </div>
    </div>
  );
};

export default SectionTitle;
