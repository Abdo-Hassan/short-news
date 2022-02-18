import { createContext, useState } from 'react';
import axios from 'axios';

export const NewsContext = createContext();

const NewsContextProvider = ({ children }) => {
  const [index, setIndex] = useState(1);
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState('general');

  const fetchNews = async () => {
    const { data } = await axios.get();
  };

  return (
    <NewsContext.Provider value={{ index, news, setIndex }}>
      {children}
    </NewsContext.Provider>
  );
};

export default NewsContextProvider;
