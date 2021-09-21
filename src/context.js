import React, { useState, useContext, useEffect, useCallback } from "react";
// make sure to use https
export const url = `https://www.omdbapi.com/?s=`;
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("teddy");
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [api, setAPI] = useState("&apikey=");

  //const urlParams = "&apikey=";

  const getData = useCallback(async () => {
    setIsLoading(true);
    try {
      const resp = await fetch(`${url}${query}${api}`);
      const data = await resp.json();
      //console.log(data);
      const { Search } = data;
      //console.log(Search);
      if (Search) {
        const newData = Search.map((item) => {
          const { Title, Poster, Type, Year, imdbID } = item;
          return {
            title: Title,
            img: Poster,
            type: Type,
            year: Year,
            id: imdbID,
          };
        });
        setData(newData);
      } else {
        setData([]);
      }

      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }, [query, api]);

  useEffect(() => {
    getData();
  }, [query, getData]);

  return (
    <AppContext.Provider value={{ setQuery, data, isLoading, api, setAPI }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
