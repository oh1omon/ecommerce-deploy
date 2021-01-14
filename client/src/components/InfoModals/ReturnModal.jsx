import React from 'react';
import Modal from '../Modal/Modal';

export default function ReturnModal() {
	return (
		<Modal>
			<div
				className='fixed z-10 flex items-center justify-center w-3/4 text-xs bg-white border-4 border-black lg:w-2/3 h-9/10 bg-opacity-90'
				onClick={(e) => e.stopPropagation()}
			>
				<div className='flex flex-col justify-between w-4/5 font-mono text-xs text-justify lg:font-sans h-9/10 lg:h-4/5 text-opacity-80'>
					<h1 className='font-sans text-3xl'>Returns Policy </h1>
					<p className='text-xs lg:text-lg'>
						We hope you will like everything you order from us, but if something is not quite right, you
						have 14 days to send it back to us.
					</p>
					<div className='w-full border-b border-black border-opacity-80'></div>
					<p className='text-xs lg:text-lg'>
						Please contact us with "a Request to Return" to the email example@example.com and include Your
						Order Number and your Last and First name. Also the name of the product you'd like to return,
						the size and color of the item and the reason for making a return.
					</p>
					<div className='w-full border-b border-black border-opacity-80'></div>
					<p className='text-xs lg:text-lg'>
						If you are approved, then your refund will be processed, and a credit will automatically be
						applied to your credit card or original method of payment, within a certain amount of days.
					</p>
				</div>
			</div>
		</Modal>
	);
}
