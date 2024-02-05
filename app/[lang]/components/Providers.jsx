import React from "react";
import TranslationWrapper from "@utils/ThemeRegistry";
import DictionaryProvider from "@hooks/DictionaryProvider";

function Providers({ children, lang }) {
  return (
    <DictionaryProvider lang={lang}>
      <TranslationWrapper dir={lang == "ar" ? "rtl" : "ltr"}>
        {children}
      </TranslationWrapper>
    </DictionaryProvider>
  );
}

export default Providers;
