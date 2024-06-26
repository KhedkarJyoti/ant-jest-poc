import React, { StrictMode }      		from 'react';
import ReactDOM 		from 'react-dom/client';
import reportWebVitals 	from './reportWebVitals';
import { Provider } 	from 'react-redux';

import App 				from './App';
import Store 			from './redux/store/Store';

import './index.css';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<StrictMode>
	<Provider store={Store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider></StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
