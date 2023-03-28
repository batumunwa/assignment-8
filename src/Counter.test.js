import { render, screen, fireEvent } from '@testing-library/react';
import { Counter } from './Counter';
import { store } from './features/store'
import { Provider } from 'react-redux'

describe('Counter component', () => {
    
    test('renders the title correctly', () => {
        render(
          <Provider store={store}>
           <Counter />
         </Provider>
        );
        const linkElement = screen.getByText('Counter');
        expect(linkElement).toBeInTheDocument();
      });

      test('initial count is zero', () => {
        render(
          <Provider store={store}>
           <Counter />
         </Provider>
        );
        const linkElement = screen.getByText('0');
        expect(linkElement).toBeInTheDocument();
      });

      test('increments count when increment button is clicked', () => {
        render(
          <Provider store={store}>
           <Counter />
         </Provider>
        );
        const incrementButton = screen.getByText('Increment');
        const countElement = screen.getByText('0');
        fireEvent.click(incrementButton)
        expect(countElement).toHaveTextContent('1');
      });

      test('decrement count when decrement button is clicked', () => {
        render(
          <Provider store={store}>
           <Counter />
         </Provider>
        );
        const decrementButton = screen.getByText('Decrement');
        const countElement = screen.getByText('1');
        fireEvent.click(decrementButton)
        expect(countElement).toHaveTextContent('0');
      });

  });