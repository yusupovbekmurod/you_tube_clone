import { useState, createContext, useContext, useEffect } from "react";
import { instance } from "../Api/intence";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const resp = await fetch(
        instance
          .get("/trending?type=C%20g%2C%20n%2C%20mo&hl=en&gl=US")
          .then((resp) =>  setData(resp.data.contents))
          
      );
      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <AppContext.Provider value={{ data }}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
