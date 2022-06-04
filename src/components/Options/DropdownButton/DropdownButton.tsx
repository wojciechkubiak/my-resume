import React, { useContext } from "react";
import { IconType } from "react-icons";
import { AppCtx, SelectorOption } from "../../../context/AppContext";

interface IDropdownButton {
  text: string;
  icon: IconType;
  option: SelectorOption;
}

const DropdownButton: React.FC<IDropdownButton> = ({
  text,
  icon,
  option,
}) => {
  const appContext = useContext(AppCtx);

  return (
    <button
      className={`
      flex 
      flex-row 
      content-center 
      justify-end 
      text-xl 
      mt-4 
      mr-2
      p-4
      border-0 
      border-solid
      rounded-full
      ${appContext.option === option ? "bg-white" : "text-gray-500 border-red"}
    `}
      onClick={() => appContext.setOption(option)}
    >
      {React.createElement(icon, { size: 32, color: "#000" })}
    </button>
  );
};

export default DropdownButton;
