import Landing from "./pages/Landing/Landing-Components";
import Infographic from "./pages/Infographic/Infographic-components";
import Budgetting from "./pages/Budgetting/Budgetting-components";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Landing />
      <hr className="line" />
      <Infographic />
      <Budgetting />
    </div>
  );
}

export default App;
