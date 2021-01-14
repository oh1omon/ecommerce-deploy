import React from 'react';
import Modal from '../Modal/Modal';

export default function DeliveryModal() {
	return (
		<Modal>
			<div
				className='fixed z-10 flex items-center justify-center w-3/4 text-xs bg-white border-4 border-black lg:w-2/3 h-9/10 bg-opacity-90'
				onClick={(e) => e.stopPropagation()}
			>
				<div className='flex flex-col justify-between w-4/5 font-mono text-xs text-justify lg:font-sans h-9/10 lg:h-4/5 text-opacity-80'>
					<h1 className='font-sans text-xl lg:text-3xl'>Delivery </h1>
					<p className='text-xs lg:text-lg'>
						We will deliver your parcel within 2-7 business days, excluding customs processing times. During
						high season, delivery might take a little longer. Please note that 2MOOD is not responsible for
						any additional time incurred while your parcel is held at Customs.
					</p>
					<div className='w-full border-b border-black border-opacity-80'></div>
					<p className='text-xs lg:text-lg'>
						We also deliver to customers worldwide from this website. If your location is not listed on
						checkout, please send an email to example@example.com stating what you would like to order and
						your address and we can provide you with a shipping quote.
					</p>
					<div className='w-full border-b border-black border-opacity-80'></div>
					<p className='text-xs lg:text-lg'>
						SHIPPING COST <br />
						Europe - 9$ <br />
						United States - 9$ <br />
						Asia and Africa - 20$ <br />
						Rest of world - 20$
					</p>
				</div>
			</div>
		</Modal>
	);
}
