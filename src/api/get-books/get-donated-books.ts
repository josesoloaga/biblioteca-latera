import { supabase } from '../client';

export const GetDonatedBooksFiltered = async (user: string | null) => {
  const { data } = await supabase
    .from('donatedBooks')
    .select()
    .eq('email', user);
  return data?.map((book) => {
    return book.bookRef;
  });
};
