import React from 'react';
import Hero from '../Hero-banner/Hero';
import Items from '../Items/Items';

const Main = ({ sex, favs, setFavs }) => {
	return (
		<div>
			<Hero />
			<Items sex={sex} favs={favs} setFavs={setFavs} />
		</div>
	);
};

export default Main;
