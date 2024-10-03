import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Blog from "./components/Blog"
import Cadastro from "./components/Cadastro"
import Home from "./components/Home"
import Login from "./components/Login"
import './styles/global.scss'
const App = () => {
  
  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/cadastro" element={<Cadastro/>} />
        <Route path="/blog" element={<Blog/>} />
      </Routes>
     </Router>
    </>
  )
}

export default App
