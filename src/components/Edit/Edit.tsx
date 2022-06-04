import { useContext } from "react";
import { AppCtx, SelectorOption } from "../../context/AppContext";
import Experience from "./Experience/Experience";
import Other from "./Other/Other";
import Personal from "./Personal/Personal";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import Template from "./Template/Template";

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

  const getEditPage = (option: SelectorOption) => {
    switch (option) {
      case SelectorOption.TEMPLATE:
        return <Template />;
      case SelectorOption.PERSONAL_DATA:
        return <Personal />;
      case SelectorOption.EXPERIENCE:
        return <Experience />;
      case SelectorOption.PROJECTS:
        return <Projects />;
      case SelectorOption.SKILLS:
        return <Skills />;
      case SelectorOption.OTHER:
        return <Other />;
      default:
        return <Template />;
    }
  };

  return (
    <div className="options-page-body w-3/12 h-screen bg-gray-100 pt-4">
      <h1 className="text-3xl text-center pb-8">
        {editHeaders[appContext.option]}
      </h1>
      {getEditPage(appContext.option)}
    </div>
  );
};

export default Edit;
