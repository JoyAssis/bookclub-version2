import Estante from "../assets/estante-de-livros.png";
const Home = () => {
  return (
    <div>
      <header>
        <h1>Clube do Livro</h1>
        <div>
          <button>Login</button>
          <button>Cadastro</button>
        </div>
      </header>

      <h2>A Sociedade Das Folhas Amarelas</h2>
      <img src={Estante} alt="ilustração de estate de livros" />
    </div>
  );
};

export default Home;
