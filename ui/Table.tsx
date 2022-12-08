import { HeaderConfig, RowConfig } from 'types/general';

const Table = ({ headers = [], rows = [] }: { headers: HeaderConfig[]; rows: RowConfig[] }) => {
  return (
    <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
      <thead className='text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400'>
        <tr className='py-3 px-6'>
          {headers.map(header => (
            <th key={header.field}>{header.name}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {rows.map(row =>
          headers.map(header => (
            <tr
              key={header.field}
              className='bg-white border-b dark:bg-gray-900 dark:border-gray-700'
            >
              <td
                scope='row'
                className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white'
              >
                {row[header.field]}
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default Table;
