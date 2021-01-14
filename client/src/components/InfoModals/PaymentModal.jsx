import React from 'react';
import Modal from '../Modal/Modal';

export default function PaymentModal() {
	return (
		<Modal>
			<div
				className='fixed z-10 flex items-center justify-center w-3/4 text-xs bg-white border-4 border-black lg:w-2/3 h-9/10 bg-opacity-90'
				onClick={(e) => e.stopPropagation()}
			>
				<div className='flex flex-col justify-between w-4/5 font-mono text-xs text-justify lg:font-sans h-9/10 lg:h-4/5 text-opacity-80'>
					<h1 className='font-sans text-3xl'>Online Payment On Our Website </h1>
					<p className='text-xs lg:text-lg'>
						Online payment with credit card is possible in case of order with delivery and order with
						pickup.
					</p>
					<div className='w-full border-b border-black border-opacity-80'></div>
					<p className='text-xs lg:text-lg'>
						To pay online, please select item Online Payment on the Checkout page.
					</p>
					<div className='w-full border-b border-black border-opacity-80'></div>
					<p className='text-xs lg:text-lg'>
						After you have chosen suitable goods, go to the Bag and input you contact data, choose Delivery
						or Pickup. Fill in delivery address and choose pickup point. Then select Online Payment and
						click on Confirm the Order.
					</p>
					<div className='w-full border-b border-black border-opacity-80'></div>
					<p className='text-xs lg:text-lg'>
						To make a payment, you will have to provide your credit card details. Transfer of this data is
						made in compliance with all necessary security rules.
					</p>
				</div>
			</div>
		</Modal>
	);
}
