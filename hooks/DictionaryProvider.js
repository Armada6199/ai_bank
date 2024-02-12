"use client";
import getDictionary from "/lib/dictionary";

const { createContext, useState, useEffect } = require("react");

export const dictionaryContext = createContext();
const DictionaryProvider = ({ children, lang }) => {
  const [dictionaryContent, setDictionaryContent] = useState();
  useEffect(() => {
    const getPage = async () => {
      const localeContent = await getDictionary(lang);
      console.log("run".repeat(200));
      setDictionaryContent(localeContent);
    };
    getPage();
  }, []);
  return (
    <dictionaryContext.Provider value={{ dictionaryContent }}>
      {children}
    </dictionaryContext.Provider>
  );
};
export default DictionaryProvider;
