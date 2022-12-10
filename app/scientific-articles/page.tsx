'use client';

import { useMemo } from 'react';
import { scientificArticles } from 'data/scientific-articles';
import { ChangeEvent, useCallback, useState } from 'react';
import { MdSearch } from 'react-icons/md';
import { normalizeGreek } from 'utils/text';
import Link from 'next/link';

const ScientificArticlesPage = () => {
  const [searchValue, setSearchValue] = useState('');

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  }, []);

  const filteredArticles = useMemo(() => {
    const rgxSearch = new RegExp(normalizeGreek(searchValue), 'ig');

    return scientificArticles.filter(sa => {
      const { title } = sa;
      const titleNoAccents = normalizeGreek(title);

      return rgxSearch.test(titleNoAccents);
    });
  }, [searchValue]);

  return (
    <main className='flex items-center justify-center mt-6 flex-col'>
      <div className='relative text-gray-600 focus-within:text-gray-400'>
        <span className='absolute inset-y-0 left-0 flex items-center pl-2'>
          <MdSearch />
        </span>
        <input
          type='search'
          name='q'
          value={searchValue}
          onChange={onChange}
          className='py-2 text-sm rounded-md pl-10 focus:outline-none bg-white text-gray-900'
          placeholder='Αναζήτηση...'
        />
      </div>
      <div className='w-2/3 mt-4'>
        {filteredArticles.map(article => (
          <div key={article.path} className='p-4 border bg-white'>
            <Link href={`scientific-articles/${article.path}`} className={`hover:text-blue`}>
              {article.title}
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
};

export default ScientificArticlesPage;
