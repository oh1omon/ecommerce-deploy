import React, { useState, useEffect } from 'react';
import Modal from '../Modal/Modal';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Loader from '../Loader/Loader';
import FavButton from '../FavButton/FavButton';

export default function ItemModal({ user, favs, setFavs }) {
	const [item, setItem] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const [infoMessage, setInfoMessage] = useState({ message: '', type: '' });
	let { id } = useParams();

	const [order, setOrder] = useState({
		item: `${id}`,
		size: '',
		type: 'order',
	});

	const valueHandler = (e) => {
		setOrder({ ...order, [e.target.name]: e.target.value });
	};

	const submitHandler = (e) => {
		e.preventDefault();

		axios
			.post('/api/sending', {
				...order,
				name: user.name,
				email: user.email,
			})
			.then((resp) => {
				setInfoMessage({ message: resp.data.message, type: resp.data.type });
			});
	};

	useEffect(() => {
		axios.get(`/api/db/${id}`).then((resp) => setItem(resp.data));
		setIsLoading(false);
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<Modal>
			<div
				className='fixed z-10 flex items-center justify-center w-3/4 overflow-y-scroll text-xs bg-white border-4 border-black lg:w-2/3 h-9/10 bg-opacity-90'
				onClick={(e) => e.stopPropagation()}
			>
				<div
					className={`flex flex-col lg:flex-row items-center ${
						isLoading ? 'justify-center' : 'justify-between'
					} w-4/5 h-auto lg:h-4/5 text-xs`}
				>
					{isLoading ? (
						<Loader />
					) : (
						<>
							<div className='flex items-center justify-center w-auto h-auto mb-4 lg:mb-0 lg:w-2/5'>
								<img
									src={item.img}
									alt={`${item.name}`}
									className='object-scale-down w-full border border-black lg:object-cover lg:h-full '
								/>
							</div>
							<div className='w-full h-full lg:w-2/5'>
								<form className='flex flex-col justify-between h-full'>
									<div className='mb-4 lg:mb-0'>
										<h1 className='font-sans text-4xl tracking-wide uppercase'>{item.name}</h1>
									</div>
									<div className='mb-4 lg:mb-0'>
										<p className='font-mono text-xs text-justify lg:text-sm text-opacity-80'>
											{item.description}
										</p>
									</div>
									<div className='flex items-baseline mb-4 lg:mb-0'>
										<div className='flex space-x-2 text-sm font-bold leading-none text-center text-gray-500 lg:space-x-5 lg:text-lg'>
											<input
												className='fixed w-0 opacity-0 '
												name='size'
												type='radio'
												value='xs'
												id='xs'
												onChange={(e) => valueHandler(e)}
												checked={order.size === 'xs'}
											/>
											<label
												htmlFor='xs'
												className='p-2 font-mono cursor-pointer focused-sibling:text-black'
											>
												XS
											</label>
											<input
												className='fixed w-0 opacity-0'
												name='size'
												type='radio'
												value='s'
												id='s'
												onChange={(e) => valueHandler(e)}
												checked={order.size === 's'}
											/>
											<label
												htmlFor='s'
												className='p-2 font-mono cursor-pointer focused-sibling:text-black'
											>
												S
											</label>
											<input
												className='fixed w-0 opacity-0'
												name='size'
												type='radio'
												value='m'
												id='m'
												onChange={(e) => valueHandler(e)}
												checked={order.size === 'm'}
											/>
											<label
												htmlFor='m'
												className='p-2 font-mono cursor-pointer focused-sibling:text-black'
											>
												M
											</label>
											<input
												className='fixed w-0 opacity-0'
												name='size'
												type='radio'
												value='l'
												id='l'
												onChange={(e) => valueHandler(e)}
												checked={order.size === 'l'}
											/>
											<label
												htmlFor='l'
												className='p-2 font-mono cursor-pointer focused-sibling:text-black'
											>
												L
											</label>
											<input
												className='fixed w-0 opacity-0'
												name='size'
												type='radio'
												value='xl'
												id='xl'
												onChange={(e) => valueHandler(e)}
												checked={order.size === 'xl'}
											/>
											<label
												htmlFor='xl'
												className='p-2 font-mono cursor-pointer focused-sibling:text-black'
											>
												XL
											</label>
										</div>
									</div>
									<div className='mb-4 lg:mb-0'>
										<h2 className='font-mono text-lg tracking-wide lg:text-2xl'>{item.price}$</h2>
									</div>
									<div className='mb-4 lg:mb-0'>
										<p
											className={`${
												infoMessage.type === 'info' ? 'text-blue-700' : 'text-red-700'
											} font-mono text-xs text-justify lg:text-sm`}
										>
											{infoMessage.message}
										</p>
									</div>
									<div className='flex flex-row justify-between w-full mb-4 lg:mb-0'>
										{user ? (
											<button
												onClick={(e) => submitHandler(e)}
												className='flex items-center justify-center w-3/5 py-1 font-sans text-xl duration-150 bg-white border-2 border-black xl:w-3/4 xl:py-2 xl:text-2xl hover:bg-blue-400'
											>
												Buy
											</button>
										) : (
											<Link
												className='flex items-center justify-center w-3/5 py-1 font-sans text-xl duration-150 bg-white border-2 border-black xl:w-3/4 xl:py-2 lg:text-xl xl:text-2xl hover:bg-blue-400'
												to='/signIn'
											>
												Buy
											</Link>
										)}
										<FavButton id={item.id} favs={favs} setFavs={setFavs} />
									</div>
								</form>
							</div>
						</>
					)}
				</div>
			</div>
		</Modal>
	);
}
