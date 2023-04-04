import { Book } from '../../domain/book';
import { supabase } from '../client';

export const postBook = async (payload: Book) => {
  const { title, editorial } = payload;

  const { error } = await supabase
    .from('books')
    .insert({ title: title, editorial: editorial });

  return error ? 'error guardando datos' : 'datos guardados correctamente';
};
