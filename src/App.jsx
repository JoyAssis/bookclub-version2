import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blog from "./components/Blog";
import Cadastro from "./components/Cadastro";
import Home from "./components/Home";
import Login from "./components/Login";
import "./styles/global.scss";
import Header from "./components/Header";
const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Router>
      <footer>
        <p>copyright</p>
        <p>Joy Assis</p>
      </footer>
    </>
  );
};

export default App;
