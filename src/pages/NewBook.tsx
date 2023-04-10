import { useEffect } from 'react';
import { DonateBookFormComponent } from '../ui/features/donate-book-form/donate-book-form-component';
import { useNavigate } from 'react-router-dom';

export const NewBookPage = () => {
  const user = localStorage.getItem('admin') ?? 'false'
  const navigate = useNavigate()
  useEffect(()=>{
    if(user !== 'true'){
      navigate('/')
      localStorage.removeItem('admin')
      localStorage.removeItem('user')
    }
   // eslint-disable-next-line react-hooks/exhaustive-deps
  },[user])
  return <DonateBookFormComponent />;
};
