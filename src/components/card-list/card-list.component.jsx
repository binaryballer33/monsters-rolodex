import { Component } from "react";
import Card from "../card/card.component";
import './card-list.styles.css';

class CardList extends Component {
    render() {
        const { monsters } = this.props;

        return (
            <div className="card-list">
              {monsters.map((monster) => {
                // destructuring inside of the map function for readability
                const { name, email, id } = monster;

                return (
                    <Card 
                        name={name}
                        email={email}
                        id={id}
                    />
                )})}  
            </div>
        )
    }
}

export default CardList;