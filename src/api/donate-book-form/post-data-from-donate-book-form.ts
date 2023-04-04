import { DonateBookForm } from '../../domain/donateBookForm';
import { supabase } from '../client';

export const postDataFromDonateBookForm = async (payload: DonateBookForm) => {
<<<<<<< HEAD
<<<<<<< HEAD
  const { name, surName, email, studentName, bookRef } = payload;

  const { error } = await supabase.from('donatedBooks').insert({
=======
  const { name, surName, email, studentName } = payload;

  const { error } = await supabase.from('donateBook').insert({
>>>>>>> 1f02bcf2 (feat:donate book from component)
=======
  const { name, surName, email, studentName, bookRef } = payload;

  const { error } = await supabase.from('donatedBooks').insert({
>>>>>>> 378fdb77 (feat: route donateform navigate/donate seteo book checked)
    name: name,
    surname: surName,
    email: email,
    studentName: studentName,
<<<<<<< HEAD
<<<<<<< HEAD
    bookRef,
=======
>>>>>>> 1f02bcf2 (feat:donate book from component)
=======
    bookRef,
>>>>>>> 378fdb77 (feat: route donateform navigate/donate seteo book checked)
  });

  return error ? 'error guardando donación' : 'donación guardada correctamente';
};
