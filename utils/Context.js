import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { getNewsAPI, getSourceAPI } from './api';

export const NewsContext = createContext();

const NewsContextProvider = ({ children }) => {
  const [index, setIndex] = useState(1);
  const [news, setNews] = useState([]);
  const [darkTheme, setDarkTheme] = useState(true);
  const [source, setSource] = useState('');
  const [category, setCategory] = useState('general');

  const fetchNews = async () => {
    try {
      const { data } = await axios.get(getNewsAPI(category));
      setIndex(1);
      setNews(data);
    } catch (error) {
      console.log('~ error', error);
    }
  };

  const fetchNewsFromSource = async () => {
    try {
      const { data } = await axios.get(getSourceAPI(source));
      setNews(data);
      setIndex(1);
    } catch (error) {
      console.log('~ error', error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, [category]);

  useEffect(() => {
    fetchNewsFromSource();
  }, [source]);

  return (
    <NewsContext.Provider
      value={{
        index,
        news,
        darkTheme,
        setIndex,
        setCategory,
        setSource,
        setDarkTheme,
      }}>
      {children}
    </NewsContext.Provider>
  );
};

export default NewsContextProvider;
