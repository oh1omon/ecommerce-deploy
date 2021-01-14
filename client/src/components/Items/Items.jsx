import React from 'react';
import { useState, useEffect } from 'react';
import Loader from '../Loader/Loader';
import axios from 'axios';
import ItemCardVert from '../ItemCard/ItemCardVert';

const Items = ({ sex, favs, setFavs }) => {
	const [items, setItems] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		axios.get('/api/db').then((response) => {
			setItems(response.data);
			setIsLoading(false);
		});
	}, []);

	return (
		<div className='flex flex-wrap justify-center w-full h-auto' id='items'>
			{isLoading ? (
				<Loader />
			) : (
				items
					.filter((item) => item.sex.includes(sex))
					.map((item) => (
						<ItemCardVert
							key={item.id}
							id={item.id}
							name={item.name}
							description={item.description}
							amount={item.amount}
							img={item.img}
							url={`item/${item.id}`}
							price={item.price}
							favs={favs}
							setFavs={setFavs}
						/>
					))
			)}
		</div>
	);
};

export default Items;
