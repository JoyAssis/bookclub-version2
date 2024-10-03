import Estante from "../assets/estante-de-livros.png";
import styles from "../styles/Home.module.scss"
const Home = () => {
  return (
    <main className={styles.mainBox}>
      <h2 className={styles.content}>A Sociedade Secreta Das Folhas Amarelas</h2>
      <img src={Estante} alt="ilustração de estate de livros" />
    </main>

  );
};

export default Home;
