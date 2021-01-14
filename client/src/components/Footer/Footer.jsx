import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
	const renderSwitch = (param) => {
		switch (param) {
			case 'error':
				return (
					<svg
						height='25'
						fill='red'
						viewBox='0 0 329.26933 329'
						width='25'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path d='m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0' />
					</svg>
				);
			case 'info':
				return (
					<svg
						height='25'
						viewBox='0 -65 434.67733 434'
						width='25'
						fill='lightgreen'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path d='m152.003906 304.34375c-5.460937 0-10.921875-2.089844-15.082031-6.25l-130.664063-130.667969c-8.34375-8.339843-8.34375-21.824219 0-30.164062 8.339844-8.339844 21.820313-8.339844 30.164063 0l115.582031 115.582031 246.253906-246.25c8.339844-8.339844 21.820313-8.339844 30.164063 0 8.339844 8.34375 8.339844 21.824219 0 30.167969l-261.332031 261.332031c-4.160156 4.160156-9.625 6.25-15.085938 6.25zm0 0' />
					</svg>
				);
			default:
				return (
					<svg
						xmlns='http://www.w3.org/2000/svg'
						height='25'
						width='25'
						fill='lightblue'
						viewBox='0 0 512.002 512.002'
					>
						<path
							d='M388.425,241.951L151.609,5.79c-7.759-7.733-20.321-7.72-28.067,0.04c-7.74,7.759-7.72,20.328,0.04,28.067l222.72,222.105
			L123.574,478.106c-7.759,7.74-7.779,20.301-0.04,28.061c3.883,3.89,8.97,5.835,14.057,5.835c5.074,0,10.141-1.932,14.017-5.795
			l236.817-236.155c3.737-3.718,5.834-8.778,5.834-14.05S392.156,245.676,388.425,241.951z'
						/>
					</svg>
				);
		}
	};

	const [subEmail, setSubEmail] = useState('');

	const [infoMessage, setInfoMessage] = useState({ type: '' });

	const valueHadler = (e) => {
		setSubEmail(`${e.target.value}`);
	};

	const submitHandler = (e) => {
		e.preventDefault();
		axios.post('/api/sending', { email: subEmail, type: 'sub' }).then((resp) => {
			setInfoMessage({ type: resp.data.type });
		});
	};

	return (
		<div className='flex items-center justify-center w-full h-auto text-gray-700 bg-blue-400 border-t-4 border-black lg:h-96 '>
			<div className='flex flex-col items-center justify-between w-4/5 lg:flex-row h-4/5'>
				<div className='w-full h-full pb-6 lg:w-1/3'>
					<h2 className='w-full py-4 uppercase border-b border-gray-700 lg:w-4/5'>Customer info</h2>
					<p className='py-1 font-mono text-sm text-justify lg:py-3 '>
						<Link to='/payment' className='duration-200 hover:text-black'>
							Payment
						</Link>
					</p>
					<p className='py-1 font-mono text-sm text-justify lg:py-3'>
						<Link to='/delivery' className='duration-200 hover:text-black'>
							Delivery
						</Link>
					</p>
					<p className='py-1 font-mono text-sm text-justify lg:py-3'>
						<Link to='/returnsPolicy' className='duration-200 hover:text-black'>
							Returns Policy
						</Link>
					</p>
				</div>
				<div className='w-full h-full pb-6 lg:w-1/3'>
					<h2 className='w-full py-4 uppercase border-b border-gray-700 lg:w-4/5'>About us</h2>
					<p className='py-1 font-mono text-sm text-justify lg:py-3'>
						<Link to='/contacts' className='duration-200 hover:text-black'>
							Contacts
						</Link>
					</p>
					<p className='py-1 font-mono text-sm text-justify lg:py-3 '>
						<Link to='/history' className='duration-200 hover:text-black'>
							Our history
						</Link>
					</p>
				</div>
				<div className='w-full h-full pb-6 lg:w-1/3'>
					<h2 className='w-full py-4 uppercase border-b border-gray-700 lg:w-4/5'>Newsletter</h2>
					<p className='w-full py-5 font-mono text-sm text-justify lg:w-4/5'>
						Yep, we have discount for subscribers to our newsletter, too! :)
					</p>
					<form className='flex flex-row group'>
						<input
							placeholder='E-mail'
							type='email'
							name='email'
							onChange={(e) => valueHadler(e)}
							className='w-full h-12 px-4 font-mono text-sm border-2 border-blue-100 lg:w-4/5 focus:border-black focus:outline-none'
						/>
						<button
							onClick={(e) => submitHandler(e)}
							className='h-12 px-4 text-white bg-black border-2 border-blue-100 lg:-ml-12'
						>
							{renderSwitch(infoMessage.type)}
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
