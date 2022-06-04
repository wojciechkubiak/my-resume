import { useContext } from "react";
import { AppCtx, SelectorOption } from "../../context/AppContext";

const editHeaders = {
  [SelectorOption.TEMPLATE]: "Wzór",
  [SelectorOption.PERSONAL_DATA]: "Dane",
  [SelectorOption.EXPERIENCE]: "Doświadczenie",
  [SelectorOption.PROJECTS]: "Projekty",
  [SelectorOption.SKILLS]: "Umiejętności",
  [SelectorOption.OTHER]: "Inne",
};

const Edit = () => {
  const appContext = useContext(AppCtx);

  return (
    <div className="options-page-body w-3/12 h-screen bg-gray-100 pt-4">
      <h1 className="text-3xl text-center">{editHeaders[appContext.option]}</h1>
    </div>
  );
};

export default Edit;