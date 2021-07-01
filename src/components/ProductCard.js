import React from 'react';
import {cards} from "./cards";

//Bootstrap
import {  Card, Button } from 'react-bootstrap';

const ProductCard = () => {
	
	const renderCard = (cards, index) => {
		return (
			<Card className="text-center" style={{ width: '15rem'}} key={index}>
				<Card.Img variant="top" src={cards.img} />
				<Card.Body>
					<Card.Title>{cards.title}</Card.Title>
					<Card.Text>{cards.text}</Card.Text>
					<Button variant="info">Go Shopping</Button>
				</Card.Body>
			</Card>
				
		)

	}
	return ( 
		<article className="cardlist">
			
			{cards.map(renderCard)}

		</article>
		
        
    );
};


export default ProductCard;
