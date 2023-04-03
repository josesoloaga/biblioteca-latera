/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom/extend-expect';
import Login from './login-component';
import { Provider } from 'react-supabase';
import { supabase } from '../../../api/client';
import { render, screen } from '@testing-library/react';

describe('Login', () => {
  it('Render Login', () => {
    render(
      <Provider value={supabase}>
        <Login />
      </Provider>,
    );
    expect(screen.getByTestId('login-component')).toBeInTheDocument();
  });
});
