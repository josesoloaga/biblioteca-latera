import { Book } from "./book";

export const validateEmail = (email: string): boolean => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};


export const getCategoryList = (booksArray: Book[]) => {
  const categories: string[] = [];
  booksArray.forEach((book) => {
    if (!categories.includes(book.category)) {
      categories.push(book.category);
    }
  });
  return categories;
};
