import React from 'react';
// import {cards} from "./cardInfoArray";
import ProductCard from './ProductCard';
// import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const CardList = ({cards}) => {
   return (
		<div>
			{cards.map(function (cards, i) {
          return (
            <ProductCard
              key={i}
              id={cards[i].id}
              img={cards[i].img}
              title={cards[i].title}
              text={cards[i].text} />
          );
        })
      }
		</div>
	);
}

export default CardList;
