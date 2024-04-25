import { useState } from "react";
import Header from "./components/Header";
import FetchData from "./components/FetchData";
import Show from "./components/Show";
import Pelement from "./components/Pelement";
import Celement from "./components/CElement";
import { UserContext, ColorContext } from "./components/Context";

function App() {
  const [userName, setUserName] = useState({ name: "Brat", sname: "Scoop" });
  return (
    <div>
      <ColorContext.Provider value="Blue ray">
        <Header />
      </ColorContext.Provider>

      <FetchData />

      <Show />

      <Pelement>
        <UserContext.Provider value={userName.sname}>
          <Celement />
        </UserContext.Provider>
      </Pelement>
    </div>
  );
}

export default App;
