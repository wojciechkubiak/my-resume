import React, { ReactNode, useState } from "react";

export enum SelectorOption {
  TEMPLATE,
  PERSONAL_DATA,
  EXPERIENCE,
  PROJECTS,
  SKILLS,
  OTHER,
}

interface IAppCtx {
  option: SelectorOption;
  setOption: (option: SelectorOption) => void;
}

const initialAppCtx: IAppCtx = {
  option: SelectorOption.TEMPLATE,
  setOption: () => {},
};

export const AppCtx = React.createContext<IAppCtx>(initialAppCtx);

interface IAppContext {
  children: ReactNode;
}

export const AppContext: React.FC<IAppContext> = ({ children }) => {
  const [currentOption, setCurrentOption] = useState<SelectorOption>(
    SelectorOption.TEMPLATE
  );

  const handleSetOption = (option: SelectorOption) => {
    setCurrentOption(option);
  };

  return (
    <AppCtx.Provider
      value={{
        option: currentOption,
        setOption: handleSetOption,
      }}
    >
      {children}
    </AppCtx.Provider>
  );
};
