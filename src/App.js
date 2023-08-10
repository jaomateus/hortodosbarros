import "./App.css";
import { Home, About, Plants, Error, PrivateRoute } from "./pages";

function App() {
  return (
    <div>
      <h4>comfy sloth starter</h4>
      <Home />
      <About />
      <Plants />
      <Error />
      <PrivateRoute />
    </div>
  );
}

export default App;
