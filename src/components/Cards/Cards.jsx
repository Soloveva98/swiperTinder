import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import s from './Cards.module.scss';
import TinderCard from 'react-tinder-card';

const Cards = () => {

	const [people, setPeople] = useState([]);
	const [swipe, setSwipe] = useState('');

	useEffect(() => {
		const fetchData = async () => {
			const { data } = await axios.get('http://localhost:4444/cards');
			setPeople(data);
		};

		fetchData();
	}, []);

	const showSwipe = () => {
		setTimeout(() => {
			setSwipe('');
		}, 500);
	};

	const onSwipe = (direction) => {
		if (direction === 'left') {
			setSwipe('dislike');
			showSwipe();
		} else if (direction === 'right') {
			setSwipe('like');
			showSwipe();
		}
	};

	const onCardLeftScreen = (myIdentifier) => {
		console.log(myIdentifier + ' left the screen')
	};


	return (
		<div className={s.cards}>
			<div className={s.cards__container}>
				{
					people.map((person) => (
						<TinderCard
							className={s.swipe}
							key={person.name}
							preventSwipe={['up', 'down']}
							onSwipe={(dir) => onSwipe(dir, person.name)}
							onCardLeftScreen={() => onCardLeftScreen(person.name)}
						>

							<div style={{ backgroundImage: `url(${person.imgUrl})` }} className={s.card}>
								<h3>{person.name}</h3>
							</div>
						</TinderCard>
					))
				}

			</div>
			<div className={s.swipe__reaction}>
				{swipe && (<img src={"/images/" + swipe + ".svg"} alt='swipe' />)}
			</div>
		</div >
	)
};

export default Cards;