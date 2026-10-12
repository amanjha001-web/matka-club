
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Term from "./pages/Term";
import Policy from "./pages/Policy";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/terms" element={<Term />} />
      <Route path="/privacy" element={<Policy />} />
    </Routes>
  );
}

export default App;
