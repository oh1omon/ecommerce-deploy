import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function ProfileModal({ user, setUser }) {
	const [passwordObj, setPasswordObj] = useState({ email: user.email, old: '', new: '' });
	const [passInputShown, setPassInputShown] = useState(false);
	const history = useHistory();

	const passwordSubmitHandler = (e) => {
		e.preventDefault();
		axios.post('/api/updatePassword', passwordObj).then((resp) => {
			setInfoMessage({ message: resp.data.message, type: resp.data.type });
		});
		setPassInputShown(false);
	};

	const exitHandler = (e) => {
		e.preventDefault();
		localStorage.removeItem('user');
		history.push('/');
		window.location.reload();
	};

	const passwordShowHandler = (e) => {
		e.preventDefault();
		setPassInputShown(true);
	};

	const passwordValueHandler = (e) => {
		setPasswordObj({ ...passwordObj, [e.target.name]: e.target.value });
	};

	const [infoMessage, setInfoMessage] = useState({ message: '', type: '' });
	return (
		<Modal>
			<div
				className='fixed z-10 flex items-center justify-center w-3/4 text-xs bg-white border-4 border-black lg:w-2/3 h-3/4 lg:h-1/2 bg-opacity-90'
				onClick={(e) => e.stopPropagation()}
			>
				<div className='flex flex-col justify-between w-4/5 font-mono text-xs text-justify lg:font-sans h-9/10 lg:h-4/5 text-opacity-80'>
					<div className='flex flex-col items-center justify-center h-2/5'>
						<button
							onClick={(e) => passwordShowHandler(e)}
							className={` ${
								passInputShown ? 'hidden' : 'flex'
							} items-center justify-center w-full h-12 font-sans text-xl duration-150 bg-white border-2 border-black hover:bg-blue-400`}
						>
							Change Password
						</button>
						<form className={`${passInputShown ? 'flex' : 'hidden'} flex-col h-3/4`}>
							<label className='font-mono'>
								<input
									className='w-full h-12 px-4 mb-4 font-mono text-sm border-2 border-black focus:border-blue-500 focus:outline-none'
									name='old'
									type='password'
									placeholder='Old Password'
									onChange={(e) => passwordValueHandler(e)}
								/>
							</label>
							<label className='font-mono'>
								<input
									className='w-full h-12 px-4 mb-4 font-mono text-sm border-2 border-black focus:border-blue-500 focus:outline-none'
									name='new'
									type='password'
									placeholder='New Password'
									onChange={(e) => passwordValueHandler(e)}
								/>
							</label>
							<button
								onClick={(e) => passwordSubmitHandler(e)}
								className={`flex items-center justify-center w-full h-12 font-sans text-xl duration-150 bg-white border-2 border-black hover:bg-blue-400`}
							>
								Change Password
							</button>
						</form>
						<div className={`${passInputShown ? 'hidden' : 'flex'} `}>
							<p
								className={`${
									infoMessage.type === 'info' ? 'text-blue-700' : 'text-red-700'
								} text-mono`}
							>
								{infoMessage.message}
							</p>
						</div>
					</div>
					<div
						className={`${
							passInputShown ? 'hidden' : 'flex'
						} w-full border-b border-black border-opacity-80`}
					></div>
					<div
						className={`${
							passInputShown ? 'hidden' : 'flex'
						} flex flex-col items-center justify-center h-2/5`}
					>
						<button
							onClick={(e) => exitHandler(e)}
							className='flex items-center justify-center w-full h-12 font-sans text-xl duration-150 bg-white border-2 border-black hover:bg-blue-400'
						>
							Exitini de le Accountini
						</button>
					</div>
				</div>
			</div>
		</Modal>
	);
}
