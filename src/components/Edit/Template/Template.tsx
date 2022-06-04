import { useContext } from "react";
import { AppCtx } from "../../../context/AppContext";
import { FcCheckmark } from "react-icons/fc";
import BlackWhiteTemplate from "./Templates/BlackWhiteTemplate";
const Template = () => {
  const appCtx = useContext(AppCtx);

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="page-body relative h-a4-sm w-a4-sm bg-white opacity-80">
        <BlackWhiteTemplate/>
        <div className="absolute right-4 bottom-4">
          <FcCheckmark size={52}/>
        </div>
      </div>
    </div>
  );
};

export default Template;
