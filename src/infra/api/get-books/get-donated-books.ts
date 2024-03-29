import { supabase } from '../client';

export const getDonatedBooksFiltered = async (user: string | null) => {
  const { data } = await supabase
    .from('donatedBooks')
    .select()
    .eq('email', user);
  return data?.map((book) => {
    return book.bookRef;
  });
};

export const getDonatedBooks = async () => {
  const { data } = await supabase.from('donatedBooks').select();

  return data;
};
