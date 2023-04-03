import { createBookListMock } from '../api/mock/mock-examples';
import { mapFilteredBooks, getCategoryList, Book } from './book';

const ListBooksMock: Book[] = createBookListMock();

describe('Book', () => {
  it('should return a list of categories', () => {
    const categories = getCategoryList(ListBooksMock);
    expect(categories).toEqual(['INFANTIL', 'CUENTOS', 'MAYORES']);
  });

  it('should return a list of books filtered by category', () => {
    const filteredBooks = mapFilteredBooks(ListBooksMock, 'INFANTIL');
    expect(filteredBooks).toEqual([ListBooksMock[0], ListBooksMock[3]]);
  });

  it('should return a list of books filtered by category Cuentos', () => {
    const filteredBooks = mapFilteredBooks(ListBooksMock, 'CUENTOS');
    expect(filteredBooks).toEqual([ListBooksMock[1], ListBooksMock[2]]);
  });

  it('should return a list of books filtered by category Mayores', () => {
    const filteredBooks = mapFilteredBooks(ListBooksMock, 'MAYORES');
    expect(filteredBooks).toEqual([ListBooksMock[4], ListBooksMock[5]]);
  });

  it('should return a list of books filtered by category Todos', () => {
    const filteredBooks = mapFilteredBooks(ListBooksMock, 'all');
    expect(filteredBooks).toEqual(ListBooksMock);
  });
});
