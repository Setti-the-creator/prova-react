import { useEffect, useState } from 'react';
import './styles.css';
import Card from '../../components/Cardpiadas';

export default function Jokes() {
    const [conteudo, setConteudo] = useState(<p>Carregando...</p>);

    async function getJokes() {
        try {
            const response = await fetch('https://api.chucknorris.io/jokes/random');
            const data = await response.json();
            return {
                joke: data.value,
                image: data.icon.url
            };
        } catch (error) {
            console.error('Erro ao buscar piadas:', error);
            return {
                joke: 'Erro ao carregar piada',
                image:'https://api.chucknorris.io/img/avatar/chuck-norris.png'
            }
        }
    }

    async function cardjokes() {
        const jokeData = await getJokes();
        return <Card data={jokeData.joke} image={jokeData.image} />;
    }

    useEffect(() => {
        async function getConteudo() {
            setConteudo(await cardjokes());
        }
        getConteudo();
    }, []);

    return (
        <div className='piadas'>
            {conteudo}
        </div>
   )
}