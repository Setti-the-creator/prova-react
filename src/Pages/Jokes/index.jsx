import { useEffect, useState } from 'react';
import './styles.css';
import Card from '../../components/Cardpiadas';

export default function Jokes() {
  const [jokeData, setJokeData] = useState({
    joke: 'Carregando...',
    image: 'https://api.chucknorris.io/img/avatar/chuck-norris.png'
  });

  async function getJokes() {
    try {
      const response = await fetch('https://api.chucknorris.io/jokes/random');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('Dados recebidos da API:', data);
      return {
        joke: data.value,
        image: data.icon_url || 'https://api.chucknorris.io/img/avatar/chuck-norris.png'
      };
    } catch (error) {
      console.error('Erro ao buscar piadas:', error);
      return {
        joke: 'Erro ao carregar piada',
        image: 'https://api.chucknorris.io/img/avatar/chuck-norris.png'
      };
    }
  }

  useEffect(() => {
    async function fetchJoke() {
      try {
        const data = await getJokes();
        console.log('JokeData após a chamada da API:', data);
        setJokeData(data);
      } catch (error) {
        console.error('Erro ao buscar piadas:', error);
        setJokeData({
          joke: 'Erro ao carregar piada',
          image: 'https://api.chucknorris.io/img/avatar/chuck-norris.png'
        });
      }
    }
    fetchJoke();
  }, []); // Add an empty dependency array to run once on mount

  return (
    <div className='piadas'>
      <Card joke={jokeData.joke} image={jokeData.image} />
    </div>
  );
}