import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import PrivacyPolicy from "./views/PrivacyPolicy";
import DeleteAccountInfo from "./views/DeleteAccountInfo";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/deleteaccount" element={<DeleteAccountInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
