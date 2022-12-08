import { scientificArticles } from 'data/scientific-articles';
import { MdSearch } from 'react-icons/md';
import { HeaderConfig } from 'types/general';
import Table from 'ui/Table';

const articlesHeaders: HeaderConfig[] = [{ field: 'title', name: 'Τίτλος' }];

const ScientificArticlesPage = () => {
  return (
    <main className='flex items-center justify-center mt-6 flex-col'>
      <div className='relative text-gray-600 focus-within:text-gray-400'>
        <span className='absolute inset-y-0 left-0 flex items-center pl-2'>
          <MdSearch />
        </span>
        <input
          type='search'
          name='q'
          className='py-2 text-sm rounded-md pl-10 focus:outline-none bg-white text-gray-900'
          placeholder='Αναζήτηση...'
        />
      </div>
      <div className='flex justify-center items-center w-2/3'>
        <Table headers={articlesHeaders} rows={scientificArticles} />
      </div>
    </main>
  );
};

export default ScientificArticlesPage;
