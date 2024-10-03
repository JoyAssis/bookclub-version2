import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header>
        <Link to="/">
        <h1>CLUBE DO LIVRO</h1>
        </Link>
        <div>
          <Link to="/login">
            <button>Login</button>
          </Link>
          <Link to="/cadastro">
            <button>Cadastro</button>
          </Link>
        </div>
      </header>
    </div>
  );
};    

export default Header;
