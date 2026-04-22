import { useState } from 'react';
import styles from './Login.module.css'

function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    function handleSubmit(e) {
        e.preventDefault(); // evita recarregar a página
        console.log("Email:", email);
        console.log("Senha:", senha);
    }

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                
                <label>Email:</label><br />
                <input 
                    type="email" 
                    placeholder="Digite seu email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                /><br />

                <label>Senha:</label><br />
                <input 
                    type="password" 
                    placeholder="Digite sua senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                /><br /><br />

                <input type="submit" value="Entrar" />
            </form>
        </div>
    );
}

export default Login;