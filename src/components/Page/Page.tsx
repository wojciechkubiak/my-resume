import { useContext } from "react";
import { EditCtx } from "../../context/EditContext";
import BlackWhiteTemplate from "../Edit/Template/Templates/BlackWhiteTemplate";

const Page = () => {
  const editCtx = useContext(EditCtx);

  return (
    <div className="page-body relative h-a4 w-a4">
      <BlackWhiteTemplate personal={editCtx.personal} />
    </div>
  );
};

export default Page;
