/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom/extend-expect';
import Login from './login-component';
import { render, screen } from '@testing-library/react';
import WrapperTestingProvider from '../../../config-adapters/wrapper-testing-provider/wrapper-testing-provider';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('Login', () => {
  it.skip('Render Login', () => {
    render(
      <WrapperTestingProvider>
        <Login />
      </WrapperTestingProvider>,
    );
    expect(screen.getByTestId('login-component')).toBeInTheDocument();
  });
});
