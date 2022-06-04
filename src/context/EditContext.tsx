import React, { ReactNode, useState } from "react";

export type Personal = {
  firstName: string;
  lastName: string;
  title: string;
  phone: string;
  email: string;
  about: string;
};

interface IEditCtx {
  personal: Personal;
  setPersonal: (key: string, value: string) => void;
}

const initPersonal = {
  firstName: "",
  lastName: "",
  title: "",
  phone: "",
  email: "",
  about: "",
};

const initialEditCtx: IEditCtx = {
  personal: initPersonal,
  setPersonal: () => {},
};

export const EditCtx = React.createContext<IEditCtx>(initialEditCtx);

interface IEditContext {
  children: ReactNode;
}

export const EditContext: React.FC<IEditContext> = ({ children }) => {
  const [personal, setPersonal] = useState<Personal>(initPersonal);

  const handlePersonal = (key: string, value: string) => {
    setPersonal((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <EditCtx.Provider
      value={{
        personal,
        setPersonal: handlePersonal,
      }}
    >
      {children}
    </EditCtx.Provider>
  );
};

export default EditContext;