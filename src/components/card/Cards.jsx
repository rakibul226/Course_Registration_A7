import { useEffect } from "react";
import { useState } from "react";
import Card from "./card";
import PropTypes from 'prop-types';


const Cards = ({handleClickedCard}) => {

    const [card, setCard] = useState([]);

    useEffect(()=>{

        fetch('courses.json')
        .then(res =>res.json())
        .then(data => setCard(data));
    },[])


    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10  ">
            {
                card.map(card => <Card  key={card.id} card={card} handleClickedCard={handleClickedCard}></Card>)
            }
        </div>
    );
};

Cards.propTypes = {
    handleClickedCard: PropTypes.func.isRequired
  };

export default Cards;