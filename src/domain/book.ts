export type Book = {
  title: string;
  editorial: string;
  donateUser: string;
  category: string;
};
export type ListBooksType = {
  books: Book[];
};

export const getCategoryList = (booksArray: Book[]): string[] => {
  const categories: string[] = [];
  booksArray.forEach((book) => {
    if (!categories.includes(book.category)) {
      categories.push(book.category);
    }
  });
  return categories;
};

export const mapFilteredBooks = (
  books: Book[],
  selectedCategory: string,
): Book[] => {
  return selectedCategory === 'all'
    ? books
    : books.filter((book) => book.category === selectedCategory.toUpperCase());
};
