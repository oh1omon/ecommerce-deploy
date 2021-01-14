import React from 'react';
import Headroom from 'react-headroom';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Header = ({ user, sex, setSex }) => {
	const clickHandler = (str) => {
		setSex(str);
	};

	return (
		<Headroom style={{ zIndex: '10' }}>
			<div className='flex flex-row flex-wrap items-center justify-around w-full h-auto bg-blue-500 bg-opacity-75 border-b-4 border-black '>
				<div className='flex flex-wrap items-center justify-between h-auto pt-5 lg:py-5 w-9/10'>
					<div className='flex items-center justify-center w-1/2 lg:w-36 logo'>
						<HashLink to='#top' smooth>
							<h1 className='text-4xl'>
								my<span className='font-bold'>Shop</span>
							</h1>
						</HashLink>
					</div>
					<div className='flex-row items-center justify-around hidden lg:flex w-96'>
						<HashLink to='#items' smooth>
							<button
								className={`${
									sex === 'male'
										? 'bg-black text-white'
										: 'transition-all duration-500 ease-out bg-left-bottom bg-gradient-to-l from-black-hard to-transparent-hard bg-200-100 hover:bg-right-bottom hover:text-white'
								} block px-6 py-1  border-t-2 border-b-2 border-r-2 border-black `}
								onClick={() => clickHandler('male')}
							>
								Men
							</button>
						</HashLink>
						<HashLink to='#items' smooth>
							<button
								className={`${
									sex === 'all' ? 'bg-black text-white' : 'hover:bg-black hover:text-white'
								} block px-6 py-1 duration-500 border-2 border-black `}
								onClick={() => clickHandler('all')}
							>
								All
							</button>
						</HashLink>
						<HashLink to='#items' smooth>
							<button
								className={`${
									sex === 'female'
										? 'bg-black text-white'
										: 'transition-all duration-500 ease-out bg-right-bottom bg-gradient-to-r from-black-hard to-transparent-hard bg-200-100 hover:bg-left-bottom hover:text-white'
								} block px-6 py-1  border-t-2 border-b-2 border-l-2 border-black `}
								onClick={() => clickHandler('female')}
							>
								Women
							</button>
						</HashLink>
					</div>
					<div className='flex items-center justify-center w-1/2 lg:w-40'>
						{user ? (
							<Link
								to={'/profile'}
								className='px-4 py-1 text-xl duration-200 border-2 border-black lg:py-2 hover:text-white hover:bg-black '
							>
								{`Hello, ${user.name.split(' ', 1)}!`}
							</Link>
						) : (
							<Link
								to={'/signIn'}
								className='px-4 py-1 text-xl duration-200 border-2 border-black lg:py-2 hover:text-white hover:bg-black '
							>
								Sign in
							</Link>
						)}
					</div>
					<div className='flex items-center justify-center w-full h-16 lg:hidden '>
						<div className='flex flex-row items-center justify-between w-9/10'>
							<HashLink to='#items' smooth>
								<button
									className={`${
										sex === 'male'
											? 'bg-black text-white'
											: 'transition-all duration-500 ease-out bg-left-bottom bg-gradient-to-l from-black-hard to-transparent-hard bg-200-100 hover:bg-right-bottom hover:text-white'
									} block px-6 py-1  border-t-2 border-b-2 border-r-2 border-black `}
									onClick={() => clickHandler('male')}
								>
									Men
								</button>
							</HashLink>
							<HashLink to='#items' smooth>
								<button
									className={`${
										sex === 'all' ? 'bg-black text-white' : 'hover:bg-black hover:text-white'
									} block px-6 py-1 duration-500 border-2 border-black `}
									onClick={() => clickHandler('all')}
								>
									All
								</button>
							</HashLink>
							<HashLink to='#items' smooth>
								<button
									className={`${
										sex === 'female'
											? 'bg-black text-white'
											: 'transition-all duration-500 ease-out bg-right-bottom bg-gradient-to-r from-black-hard to-transparent-hard bg-200-100 hover:bg-left-bottom hover:text-white'
									} block px-6 py-1  border-t-2 border-b-2 border-l-2 border-black `}
									onClick={() => clickHandler('female')}
								>
									Women
								</button>
							</HashLink>
						</div>
					</div>
				</div>
			</div>
		</Headroom>
	);
};

export default Header;
