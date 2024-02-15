"use client";
import React from "react";
import TranslationWrapper from "/utils/ThemeRegistry";
import DictionaryProvider from "/hooks/DictionaryProvider";
import AgreementProvider from "/hooks/AgreementProvider.js";
import { FormProvider, useForm } from "react-hook-form";
import UserService from "@/hooks/KeycloakProvider";
import KeycloakProvider from "@/hooks/KeycloakProvider";

function Providers({ children, lang }) {
  const methods = useForm({
    defaultValues: {
      paymentAgreenment: null,
      totalPayrollAmount: 0,
      totalPayrollRecords: 0,
      paymentAgreenmentFilter: "All",
      fileId: 205548667,
    },
  });
  return (
    <DictionaryProvider lang={lang}>
      <FormProvider {...methods}>
        <AgreementProvider>
          <TranslationWrapper dir={lang == "ar" ? "rtl" : "ltr"}>
            {children}
          </TranslationWrapper>
        </AgreementProvider>
      </FormProvider>
    </DictionaryProvider>
  );
}

export default Providers;
