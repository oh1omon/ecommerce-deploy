import { useRef, useEffect } from 'react';

/**
 * Creates DOM element to be used as React root.
 * @returns {HTMLElement}
 */
function createRootElement() {
	const rootContainer = document.createElement('div');
	rootContainer.setAttribute('id', 'modal_root');
	return rootContainer;
}

/**
 * Appends element as last child of body.
 * @param {HTMLElement} rootElem
 */
function addRootElement(rootElem) {
	document.body.insertBefore(rootElem, document.body.lastElementChild.nextElementSibling);
}

/**
 * @returns {HTMLElement} The DOM node to use as the Portal target.
 */
function usePortal() {
	const rootElemRef = useRef(null);

	useEffect(function setupElement() {
		const existingParent = document.querySelector('modal_root');
		const parentElem = existingParent || createRootElement();
		if (!existingParent) {
			addRootElement(parentElem);
		}

		parentElem.appendChild(rootElemRef.current);

		return function removeElement() {
			rootElemRef.current.remove();
			if (!parentElem.childElementCount) {
				parentElem.remove();
			}
		};
	}, []);

	function getRootElem() {
		if (!rootElemRef.current) {
			rootElemRef.current = document.createElement('div');
		}
		return rootElemRef.current;
	}

	return getRootElem();
}

export default usePortal;
