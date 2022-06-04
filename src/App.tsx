import OptionsSelector from "./components/Options";
import { AiFillPlusCircle } from "react-icons/ai";
import { AppContext } from "./context/AppContext";

import "./App.css";
import Edit from "./components/Edit/Edit";
import EditContext from "./context/EditContext";
import Page from "./components/Page";

const App = () => {
  return (
    <AppContext>
      <EditContext>
        <div className="App">
          <div className="options-page-body w-1/12">
            <OptionsSelector />
          </div>
          <Edit />
          <div className="generated-page-body w-8/12 flex items-center justify-evenly">
            <Page />
            <button>
              <AiFillPlusCircle size={52} color="#564D4A" />
            </button>
          </div>
        </div>
      </EditContext>
    </AppContext>
  );
};

export default App;
