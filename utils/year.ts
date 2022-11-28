import { START_YEAR } from 'data/general';

export const calculateYears = () => {
  const today = new Date();
  const yyyy = today.getFullYear();
  return yyyy - START_YEAR;
};
