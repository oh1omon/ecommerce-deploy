import React from 'react';
import { Link } from 'react-router-dom';
import FavButton from '../FavButton/FavButton';

const ItemCardVert = ({ id, name, description, img, price, url, favs, setFavs }) => {
	return (
		<div className='relative flex flex-col m-8 overflow-hidden border-2 border-black w-105 h-140'>
			<div className='w-full h-full'>
				<img className='object-cover w-full h-full' src={img} alt={name + ' image'} />
			</div>
			<div className='absolute bottom-0 flex flex-row items-center justify-around w-full bg-white border-t-2 border-black lg:hidden h-1/4 bg-opacity-90'>
				<Link
					to={url}
					className='flex items-center justify-center w-2/3 py-2 text-2xl font-medium text-black uppercase duration-150 bg-white border-2 border-black hover:bg-blue-600'
				>
					{name}
				</Link>
			</div>
			<div className='flex-col items-center hidden duration-500 transform bg-white border-t-2 border-black lg:flex justify-evenly min-h-3/4 bg-opacity-90 -translate-y-1/4 hover:-translate-y-full'>
				<h2 className='text-3xl font-medium uppercase'>{name}</h2>
				<p className='w-3/4 font-mono text-sm text-justify'>{`${description.split(' ', 25).join(' ')}...`}</p>
				<h3 className='font-mono text-2xl font-bold uppercase'>{price}$</h3>
				<div className='flex flex-row justify-between w-3/4'>
					<Link
						to={url}
						className='flex items-center justify-center w-2/3 py-2 text-black duration-150 bg-white border-2 border-black hover:bg-blue-600'
					>
						Read More
					</Link>
					<FavButton id={id} favs={favs} setFavs={setFavs} />
				</div>
			</div>
		</div>
	);
};

export default ItemCardVert;
