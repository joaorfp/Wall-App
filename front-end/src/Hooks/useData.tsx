import { useContext } from 'react';
import { DataContext, DataContextInterface } from '../Context/DataProvider';

function useData(): DataContextInterface {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within DataProvider');
  }
  return context;
}

export default useData;
