import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Modal from '../Modal/Modal';
import axios from 'axios';

export default function SignInModal({ setUser }) {
	const [newAccount, setNewAccount] = useState(false);

	let history = useHistory();

	const [accountData, setAccountData] = useState({ email: '', password: '', name: '' });

	const newAccountHandler = () => {
		newAccount ? setNewAccount(false) : setNewAccount(true);
	};

	const valueHandler = (e) => {
		setAccountData({ ...accountData, [e.target.name]: e.target.value });
	};

	const signUpHandler = () => {
		axios.post('/api/insert', { ...accountData, status: 'user' }).then((resp) => {
			console.log(resp.data);
			setInfoMessage({ message: resp.data.message, type: resp.data.type });

			if (resp.data.code === 'INSERT_OK') {
				setTimeout(() => {
					signInHandler(false);
					history.goBack();
				}, 2000);
			}
		});
	};

	const signInHandler = (showMessage = true) => {
		axios.post('/api/getUser', { ...accountData }).then((resp) => {
			if (showMessage) {
				setInfoMessage({ message: resp.data.message, type: resp.data.type });
			}

			if (resp.data.code === 'FOUND') {
				localStorage.setItem(
					'user',
					JSON.stringify({ email: resp.data.email, name: resp.data.name, status: resp.data.status })
				);
				setUser({ email: resp.data.email, name: resp.data.name, status: resp.data.status });
				setTimeout(() => {
					history.goBack();
				}, 2000);
			}
		});
	};

	const [infoMessage, setInfoMessage] = useState({ message: '', type: '' });

	const submitHandler = (e) => {
		e.preventDefault();
		newAccount ? signUpHandler() : signInHandler();
	};

	return (
		<Modal>
			<div
				className='fixed z-10 flex items-center justify-center w-3/4 text-xs bg-white border-4 border-black lg:w-1/3 h-5/6 bg-opacity-90'
				onClick={(e) => e.stopPropagation()}
			>
				<div className='relative flex flex-col justify-between w-4/5 font-mono text-xs text-justify h-9/10 lg:h-4/5 text-opacity-80'>
					<form className='flex flex-col justify-around h-5/6'>
						<div className='h-48'>
							<label className='font-mono'>
								<input
									className='w-full h-12 px-4 mb-4 font-mono text-sm border-2 border-black focus:border-blue-500 focus:outline-none'
									name='email'
									type='email'
									placeholder='E-mail'
									onChange={(e) => valueHandler(e)}
								/>
							</label>
							<label className='font-mono'>
								<input
									className='w-full h-12 px-4 mb-4 font-mono text-sm border-2 border-black focus:border-blue-500 focus:outline-none'
									name='password'
									type='password'
									placeholder='Password'
									onChange={(e) => valueHandler(e)}
								/>
							</label>
							{newAccount && (
								<label className='font-mono'>
									<input
										className='w-full h-12 px-4 font-mono text-sm border-2 border-black focus:border-blue-500 focus:outline-none'
										name='name'
										type='text'
										placeholder='Your Name'
										onChange={(e) => valueHandler(e)}
									/>
								</label>
							)}
						</div>
						<div className='w-full text-lg text-justify h-18'>
							<p className={`${infoMessage.type === 'info' ? 'text-blue-700' : 'text-red-700'}`}>
								{infoMessage.message}
							</p>
						</div>
						<button
							onClick={(e) => submitHandler(e)}
							className='flex items-center justify-center w-full h-12 font-sans text-xl duration-150 bg-white border-2 border-black hover:bg-blue-400'
						>
							{newAccount ? 'Sign Up!' : 'Sign In'}
						</button>
					</form>
					<label className='absolute font-sans bottom-4'>
						<input
							className='mr-3 font-mono'
							name='newAccount'
							type='checkbox'
							onChange={newAccountHandler}
						/>
						I don't have an account
					</label>
				</div>
			</div>
		</Modal>
	);
}
