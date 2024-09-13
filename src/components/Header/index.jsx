import { Link } from 'react-router-dom'
import './styles.css'

export default function Header() {
    return (
        <>
        <header id='cabecalho'>
            <h1>Seja bem-vindo </h1>
            <nav>
                <ol>

                <Link to="/"><li>Home</li></Link>
                <Link to="/about"><li>About</li></Link>
                <Link to="/jokes"><li>Jokes</li></Link>

                </ol>
            </nav> 
        </header>
        </>
    )
}