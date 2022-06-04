import { useContext, useState } from "react";
import DropdownButton from "./DropdownButton/DropdownButton";
// import Option from "./Option/Option";
import {
  FiAirplay,
  FiBookOpen,
  FiFolder,
  FiMenu,
  FiUser,
  FiStar,
} from "react-icons/fi";

import "./OptionsSelector.css";
import { AppCtx, SelectorOption } from "../../context/AppContext";

const OptionsSelector = () => {
  const appContext = useContext(AppCtx);

  return (
    <div className="flex flex-col items-end justify-end py-4 ml-1 ">
      <DropdownButton
        text="Wzór"
        icon={FiAirplay}
        option={SelectorOption.TEMPLATE}
      />
      {/* <Option /> */}
      <DropdownButton
        text="Dane osobowe"
        icon={FiUser}
        option={SelectorOption.PERSONAL_DATA}
      />
      <DropdownButton
        text="Doświadczenie"
        icon={FiBookOpen}
        option={SelectorOption.EXPERIENCE}
      />
      <DropdownButton
        text="Projekty"
        icon={FiFolder}
        option={SelectorOption.PROJECTS}
      />
      <DropdownButton
        text="Umiejętności"
        icon={FiStar}
        option={SelectorOption.SKILLS}
      />
      <DropdownButton
        text="Inne (np. Prawo Jazdy)"
        icon={FiMenu}
        option={SelectorOption.OTHER}
      />
    </div>
  );
};

export default OptionsSelector;
