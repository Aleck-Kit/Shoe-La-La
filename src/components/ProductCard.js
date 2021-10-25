import React from 'react';
import {cards} from "./cards";

//Bootstrap
import {  Card, Button } from 'react-bootstrap';

const ProductCard = () => {
	
	const renderCard = (cards, index) => {
		return (
			<Card className="text-center" style={{ width: '15rem', boxShadow: '0 10px 20px -8px rgba(0,0, 0, .7)'}} key={index}>
				<Card.Img variant="top" src={cards.img} />
				<Card.Body>
					<Card.Title>{cards.title}</Card.Title>
					<Card.Text>{cards.text}</Card.Text>
					<Button variant="info" style={{boxShadow: '0 10px 20px -8px rgba(0,0, 0, .7)'}}>Go Shopping</Button>
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
