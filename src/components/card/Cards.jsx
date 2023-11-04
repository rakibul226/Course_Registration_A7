import { useEffect } from "react";
import { useState } from "react";
import Card from "./card";

const Cards = ({handleClickedCard}) => {

    const [card, setCard] = useState([]);

    useEffect(()=>{

        fetch('courses.json')
        .then(res =>res.json())
        .then(data => setCard(data));
    },[])


    return (
        <div className="grid grid-cols-3 gap-10  ">
            {
                card.map(card => <Card  key={card.id} card={card} handleClickedCard={handleClickedCard}></Card>)
            }
        </div>
    );
};

export default Cards;