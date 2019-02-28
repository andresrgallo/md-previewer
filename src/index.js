import React from 'react';
import ReactDOM from 'react-dom';

import 'index.scss';

if ('serviceWorker' in navigator) {
	window.addEventListener('load', () => {
		navigator.serviceWorker
			.register('/service-worker.js')
			.then(registration => {
				console.log('SW registered: ', registration);
			})
			.catch(registrationError => {
				console.log('SW registration failed: ', registrationError);
			});
	});
}

let HelloWorld = () => {
	return <h1>Hello there World!</h1>;
};

ReactDOM.render(<HelloWorld />, document.getElementById('root'));
