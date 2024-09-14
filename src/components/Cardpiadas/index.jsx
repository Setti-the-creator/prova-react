import './styles.css'


export default function Card({ joke ,image }) {
    return (
        <div className="card">
          <img src={image} alt="Chuck Norris" className='card-image'/>
            <p>{joke}</p>
        </div>
    );
}