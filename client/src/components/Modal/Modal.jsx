import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useHistory } from 'react-router-dom';
import usePortal from '../../logic/usePortal/usePortal';

const Modal = ({ children }) => {
	const target = usePortal();
	let history = useHistory();

	useEffect(() => {
		document.body.style.overflow = 'hidden';
		return () => (document.body.style.overflow = 'unset');
	}, []);

	return createPortal(
		<div
			className='fixed top-0 bottom-0 left-0 right-0 z-20 flex items-center justify-center w-full h-full text-xs bg-black bg-opacity-40 lg:text-lg'
			onClick={() => history.goBack()}
		>
			{children}
		</div>,
		target
	);
};

export default Modal;
