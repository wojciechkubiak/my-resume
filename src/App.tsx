import { useContext, useEffect } from "react";
import OptionsSelector from "./components/Options";
import { AiFillPlusCircle } from "react-icons/ai";
import { AppContext, AppCtx, SelectorOption } from "./context/AppContext";

import "./App.css";
import Edit from "./components/Edit/Edit";



const App = () => {

  return (
    <AppContext>
      <div className="App">
        <div className="options-page-body w-1/12">
          <OptionsSelector />
        </div>
        <Edit/>
        <div className="generated-page-body w-8/12 flex items-center justify-evenly">
          <div className="page-body h-a4 w-a4"></div>
          <button>
            <AiFillPlusCircle size={52} color="#564D4A" />
          </button>
        </div>
      </div>
    </AppContext>
  );
};

export default App;
