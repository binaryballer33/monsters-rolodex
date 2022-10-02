import './card.styles.css';

// takes 2 args, 1st is props, 2nd arg is forwardRef
const Card = ({ monster }, forwardRef) => {
    // destructuring inside of the map function for readability
    const { name, email, id } = monster;

    return (
        <div className="card-container" key={id}>
            <img 
                alt={`monster ${name}`} 
                src={`https://robohash.org/${id}?set=set2&size=180x180`}
            />

            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}

export default Card;