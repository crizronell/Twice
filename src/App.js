import Navbar from "./components/Navbar/Navbar";
import Pages from "./Pages/Pages";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Pages />
        <Footer />
      </Router>
    </>
  );
}

export default App;
