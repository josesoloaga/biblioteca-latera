import { supabase } from '../client';
  
export const getAllBooks = async () => {

  const { data } = await supabase
  .from('books')
  .select() 

  return data ;
};
  
export const getDonatedBooks = async () => {
  const { data } = await supabase
  .from('donatedBooks')
  .select() 
  return data ;
};


  