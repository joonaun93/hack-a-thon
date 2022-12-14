import Landing from "./pages/Landing/Landing-Components";
import Infographic from "./pages/Infographic/Infographic-components";
import Budgeting from "./pages/Budgeting/Budgeting-components";
import Footer from "./components/Footer/Footer-component";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Landing />
      <hr className="line" />
      <Infographic />
      <hr className="line2" />
      <Budgeting />
      <Footer />
    </div>
  );
}

export default App;
