export default function Login() {
    return (<div className="login" style={{ color: "white" }}>
        <img src="/lani-5andar2.svg" className="w-100"></img>
        <hr />
        <form >
            <input autoComplete="username" className="loginbtns form-control mb-3" type="text" name="u" placeholder="Usuário" required="required" />
            <input className="loginbtns form-control mb-3" type="password" name="p" autoComplete="current-password" placeholder="Senha" required="required" />
            <hr />
            <button type="button" className="btn btn-primary btn-block btn-large w-100">Entrar</button>
            {/*  <p className="text-danger text-center badge">{"authError"}</p> */}
        </form>

        <footer className="pt-5 mt-5" style={{ color: "black", textAlign: "center" }}>
            <hr className="mt-0"></hr>
            <span className="text-center text-white">
                Powered by{' '}
                <a href="./"> <img src="/lani-5andar2.svg" width={150}></img></a>
            </span>
        </footer>
    </div>
    )
}