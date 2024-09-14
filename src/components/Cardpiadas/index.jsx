import './styles.css';

export default function Card({ joke, image }) {
  const handleReset = () => {
    window.location.reload();
  };

  return (
    <div className="card">
      <img src={image} alt="Chuck Norris" className='card-image'/>
      <p>{joke}</p>
      <button id="reload-button" onClick={handleReset}>Gerar nova piada</button>
    </div>
  );
}