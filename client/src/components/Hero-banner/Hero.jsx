import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Hero = () => {
	return (
		<div className='relative flex items-center justify-center bg-fixed border-b-4 border-black h-hero hero-image'>
			<Link
				smooth
				to='#items'
				className='relative py-1.5 px-6 border-2 text-2xl border-black text-black justify-center duration-150 hover:bg-blue-600'
			>
				Take a look.
			</Link>
		</div>
	);
};

export default Hero;
