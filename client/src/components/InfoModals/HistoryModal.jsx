import React from 'react';
import Modal from '../Modal/Modal';

export default function HistoryModal() {
	return (
		<Modal>
			<div
				className='fixed z-10 flex items-center justify-center w-3/4 text-xs bg-white border-4 border-black lg:w-2/3 h-9/10 bg-opacity-90'
				onClick={(e) => e.stopPropagation()}
			>
				<div className='flex flex-col justify-between w-4/5 font-mono text-xs text-justify lg:font-sans h-9/10 lg:h-4/5 text-opacity-80'>
					<h1 className='font-sans text-xl lg:text-3xl'>Our history</h1>
					<p className='text-xs lg:text-lg'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam illo praesentium asperiores
						porro reiciendis quis?
					</p>
					<div className='w-full border-b border-black border-opacity-80'></div>
					<p className='text-xs lg:text-lg'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam aperiam, quia officia vero
						voluptatem enim amet laboriosam rem corrupti hic nobis, nisi dolorem distinctio incidunt error
						quam velit! Corporis, et.
					</p>
					<div className='w-full border-b border-black border-opacity-80'></div>
					<p className='text-xs lg:text-lg'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolores dolorum officia repellat
						fugiat quibusdam voluptatem error recusandae fuga aspernatur sapiente, eligendi quasi, rerum
						eius architecto blanditiis. Iste, laudantium explicabo fugit minus voluptatem quas ipsa.
					</p>
				</div>
			</div>
		</Modal>
	);
}
