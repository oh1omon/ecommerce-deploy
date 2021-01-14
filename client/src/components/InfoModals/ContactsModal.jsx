import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import axios from 'axios';

export default function ContactsModal() {
	const [message, setMessage] = useState({ name: '', email: '', message: '', type: 'message' });

	const [infoMessage, setInfoMessage] = useState({ message: '', type: '' });

	const valueHadler = (e) => {
		setMessage({ ...message, [e.target.name]: e.target.value });
	};

	const submitHandler = (e) => {
		e.preventDefault();
		axios.post('/api/sending', message).then((resp) => {
			setInfoMessage({ message: resp.data.message, type: resp.data.type });
		});
	};
	return (
		<Modal>
			<div
				className='fixed z-10 flex items-center justify-center w-3/4 text-xs bg-white border-4 border-black lg:w-1/3 h-5/6 bg-opacity-90'
				onClick={(e) => e.stopPropagation()}
			>
				<div className='flex flex-col justify-between w-4/5 font-mono text-xs text-justify h-9/10 lg:h-4/5 text-opacity-80'>
					<div className='flex flex-col items-center justify-between w-full h-full'>
						<form className='flex flex-col justify-between w-full h-full lg:w-4/5'>
							<h2 className='font-sans text-2xl'>Contact</h2>
							<input
								placeholder='Your Name'
								type='text'
								name='name'
								onChange={(e) => valueHadler(e)}
								className='w-full h-12 px-4 font-mono text-sm border-2 border-black focus:border-blue-700 focus:outline-none'
							/>
							<input
								placeholder='E-mail'
								type='email'
								name='email'
								onChange={(e) => valueHadler(e)}
								className='w-full h-12 px-4 font-mono text-sm border-2 border-black focus:border-blue-700 focus:outline-none'
							/>
							<textarea
								name='message'
								id=''
								cols='20'
								rows='5'
								onChange={(e) => valueHadler(e)}
								className='w-full px-4 py-1 font-mono text-sm border-2 border-black focus:border-blue-700 focus:outline-none'
							></textarea>
							<p className={`${infoMessage.type === 'info' ? 'text-blue-700' : 'text-red-700'}`}>
								{infoMessage.message}
							</p>
							<button
								onClick={(e) => submitHandler(e)}
								className='flex items-center justify-center w-full py-2 font-sans text-2xl duration-150 bg-white border-2 border-black text hover:bg-blue-400'
							>
								Send Message
							</button>
						</form>
					</div>
				</div>
			</div>
		</Modal>
	);
}
