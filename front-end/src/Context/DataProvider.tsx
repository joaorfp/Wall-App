import React, { useState, createContext } from 'react';
import { getPosts } from '../Services/request';

export interface DataContextInterface {
  data: any;
  getData: () => void;
}

export const DataContext = createContext<DataContextInterface | null>(null);

function DataProvider({ children }: { children: JSX.Element }) {
  const [data, setData] = useState([]);

  async function getData() {
    const posts = await getPosts();
    setData(posts);
  }

  const object = {
    data,
    getData,
  };

  return <DataContext.Provider value={object}>{children}</DataContext.Provider>;
}

export default DataProvider;
