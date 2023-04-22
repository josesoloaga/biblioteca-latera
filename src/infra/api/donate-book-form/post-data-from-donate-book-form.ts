import { DonateBookForm } from '../../../domain/models/donateBookForm';
import { supabase } from '../client';

export const postDataFromDonateBookForm = async (payload: DonateBookForm) => {
  const { name, surname, email, studentname, bookRef } = payload;

  const { error } = await supabase.from('donatedBooks').insert({
    name,
    surname,
    email,
    studentname,
    bookRef,
  });

  return error ? 'error guardando donación' : 'donación guardada correctamente';
};
