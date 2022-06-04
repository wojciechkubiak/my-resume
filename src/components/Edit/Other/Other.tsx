import { useContext } from "react";
import { AppCtx } from "../../../context/AppContext";

const Other = () => {
  const appCtx = useContext(AppCtx);

  return <div>oth</div>;
};

export default Other;