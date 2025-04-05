import Page from "../assets/paper2.png"
import Home from "../assets/home.png"
import styles from "../styles/Cadastro.module.scss"

const Login = () => {
  return (
    <section className={styles.section}>
      <div className={styles.banner}>
        <h1>Clube do livro</h1>
        <p>Editora BLB</p>
        <img src={Page} alt="folha rasgada" />
      </div>
      <div className={styles.formContainer}>
        <a href="/" className={styles.casa}><img src={Home} alt="home" className={styles.home} /></a>
        <h2>Entre na sua conta</h2>
        <form>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="email@gmail.com" />
          <label htmlFor="senha">Senha</label>
          <input type="password" name="senha" placeholder="Senha" />
          <button type="submit">Entrar</button>
        </form>
        <div className={styles.containerLinks}>
          <p>
            Não tem uma conta? <a href="/cadastro">Cadastre-se aqui</a>
          </p>
          <p>
            <a href="/recuperar-senha">Esqueci minha senha</a>
          </p>
        </div>
      </div>
    </section>
  )
}
export default Login