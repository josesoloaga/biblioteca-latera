import { DonateBookForm } from '../../domain/donateBookForm';
import { supabase } from '../client';

export const postDataFromDonateBookForm = async (payload: DonateBookForm) => {
  const { name, surName, email, studentName } = payload;

  const { error } = await supabase.from('donateBook').insert({
    name: name,
    surname: surName,
    email: email,
    studentName: studentName,
  });

  return error ? 'error guardando donación' : 'donación guardada correctamente';
};
