import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  Home  from "./pages/Home";
import Header from "./components/Header";
import AboutPage from "./pages/AboutPage";
import { AboutIconLink } from "./components/AboutIconLink";
import { FeedbackProvider } from "./context/FeedBackContex";

function App() {
  return (
  <FeedbackProvider>
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />}/>
        </Routes>
      </div>
      <AboutIconLink/>
    </Router>
    </FeedbackProvider>
  );
}

export default App;
