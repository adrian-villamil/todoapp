import React from "react";
import { AppContext } from "../context/AppContext";

export const useAppContext = () => {
  const appContext = React.useContext(AppContext);

  if (!appContext) {
    throw new Error('useAppContext has to be used within <AppContext.Provider>');
  }

  return appContext;
};