import Card from "../card/card.component";
import './card-list.styles.css';

// functional components can take in props as Arg 1 and forwardRef as Arg 2
const CardList = (props, forwardRef) => {
  // 1st way of destructuring props, you can also do it from the props arg
  const { monsters } = props;

  return (
      <div className="card-list">
        {monsters.map((monster) => {
          return <Card monster={monster} />;
        })}  
      </div>
  )
}

export default CardList;