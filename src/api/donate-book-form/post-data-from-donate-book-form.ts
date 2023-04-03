import { DonateBookForm } from '../../domain/donateBookForm';
import { supabase } from '../client';

export const postDataFromDonateBookForm = async (payload: DonateBookForm) => {


  const { name, surName, email, studentName, bookRef } = payload;

  const { error } = await supabase.from('donatedBooks').insert({
    name: name,
    surname: surName,
    email: email,
    studentName: studentName,
    bookRef,

  });

  return error ? 'error guardando donación' : 'donación guardada correctamente';
};
