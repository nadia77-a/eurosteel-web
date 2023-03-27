import "./App.css";
import "./styles/globals.css";
import "./styles/animate.css";
import "./styles/font-awesome.min.css";
import "./styles/flaticon.css";

import { BrowserRouter, HashRouter} from 'react-router-dom';
import AppRoutes from "./routes";

function App() {
  return (
    <HashRouter>
      <AppRoutes />
    </HashRouter>
  );
}

export default App;
