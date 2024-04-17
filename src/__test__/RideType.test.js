import { render, screen } from '@testing-library/react';
import { Provider }     from 'react-redux';
import configureStore   from 'redux-mock-store';
import RideType from '../components/generic/RideType/RideType';

describe('With React Testing Library', () => {
    const initialState = {rideTypes : []};
	const middlewares = [];
    const mockStore = configureStore(middlewares);
    let store;

    test('renders correctly', async() => {
        store = mockStore(initialState);
        render(<Provider store={store}><RideType /></Provider>);
        // const linkElement = screen.getByText(/learn react/i);
        // expect(linkElement).toBeInTheDocument();
    });
})
