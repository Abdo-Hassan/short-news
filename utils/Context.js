import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { getNewsAPI } from './api';

export const NewsContext = createContext();

const NewsContextProvider = ({ children }) => {
  const [index, setIndex] = useState(1);
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState('general');

  const fetchNews = async () => {
    const { data } = await axios.get(getNewsAPI(category));
    setNews(data);
    setIndex(1);
  };

  useEffect(() => {
    fetchNews();
  }, [category]);

  return (
    <NewsContext.Provider value={{ index, news, setIndex, fetchNews }}>
      {children}
    </NewsContext.Provider>
  );
};

export default NewsContextProvider;
