/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom/extend-expect';
import Login from './login-component';
import { Provider } from 'react-supabase';
import { supabase } from '../../../api/client';
import { render, screen } from '@testing-library/react';
import { AppProvider } from '../../../config-adapters/context-provider';


  jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(),
  }));





describe('Login', () => {
  it('Render Login', () => {
    render(
      <AppProvider>
      <Provider value={supabase}>
        <Login />
      </Provider>
      </AppProvider>,
    );
    expect(screen.getByTestId('login-component')).toBeInTheDocument();
  });
});
