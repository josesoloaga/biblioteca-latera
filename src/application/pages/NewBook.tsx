import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { NewBookForm } from '../ui/features/new-book-form/new-book-form-component';

export const NewBookPage = () => {
  const user = localStorage.getItem('admin') ?? 'false';
  const navigate = useNavigate();

  useEffect(() => {
    if (user !== 'true') {
      localStorage.removeItem('admin');
      localStorage.removeItem('user');
      navigate('/home');
      navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  return (
    <>
      <NewBookForm />

    </>
  );
};
