import React from 'react';

export default function FavButton({ id, favs, setFavs }) {
	const FavHandler = (e) => {
		e.preventDefault();
		if (!favs.includes(id)) {
			setFavs([...favs, id]);
		} else {
			const favIndex = favs.indexOf(id);
			favs.splice(favIndex, 1);
			setFavs([...favs]);
		}
	};

	return (
		<button
			className={`flex items-center justify-center duration-150  border-2 border-black h-10 w-10 lg:h-14 lg:w-14 hover:bg-black hover:text-white ${
				favs.includes(id) ? 'bg-blue-400' : 'bg-white'
			}`}
			onClick={(e) => FavHandler(e)}
		>
			<svg width='20' height='20' fill='currentColor'>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z'
				/>
			</svg>
		</button>
	);
}
