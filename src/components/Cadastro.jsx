import Page from "../assets/paper2.png"
import styles from "../styles/Cadastro.module.scss"

const Cadastro = () => {
  return (
    <section className={styles.section}>
      <div className={styles.banner}>
        <h1>Clube do livro</h1>
        <p>A Sociedade Secreta Das Folhas Amarelas</p>
        <img src={Page} alt="folha rasgada" />
      </div>
      <div className={styles.formContainer}>
        <h2>Crie sua conta</h2>
        <form>
          <label htmlFor="name">Nome completo</label>
          <input type="text" name="name" placeholder="P'Dean" />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="email@gmail.com" />
          <label htmlFor="nascimento">Data de Nascimenro</label>
          <input type="date" name="nascimento" placeholder="Data de Nascimento" />
          <label htmlFor="senha">Senha</label>
          <input type="password" name="senha" placeholder="Senha" />
          <button type="submit">Criar conta</button>
        </form>
        <p>
          Já tem uma conta? <a href="/login">Entre aqui</a>
        </p>
        <p>
          <a href="/recuperar-senha">Esqueci minha senha</a>
        </p>
        <p>
          Ao se cadastrar, você concorda com os nossos <a href="/termos">Termos de Uso</a> e <a href="/privacidade">Política de Privacidade</a>.
        </p>
      </div>
    </section>
  )
}

export default Cadastro