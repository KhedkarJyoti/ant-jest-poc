import React            from 'react';
import { render }       from '@testing-library/react';
import { Provider }     from 'react-redux';
import configureStore   from 'redux-mock-store';
import App              from '../App';
import { BrowserRouter } from 'react-router-dom';

describe('With React Testing Library', () => {
    const initialState = {};
	const middlewares = [];
    const mockStore = configureStore(middlewares);
    let store;

    it('App Rendered', () => {
        store = mockStore(initialState);
        // render(
        //     <Provider store={store}>
		// 	<BrowserRouter>
		// 	</BrowserRouter>				
        //         <App />
        //     </Provider>
        // );
    });
});