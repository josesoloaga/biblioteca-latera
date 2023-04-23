import React, { useEffect, useState } from 'react';
import ListItem from './list-item-component';
import {
  mapFilteredBooks,
  getCategoryList,
  ListBooksType,
} from '../../../../domain/models/book';
import MyDonatedBooksList from '../my-donated-books-list/my-donated-books-list-component';
import { useAppContext } from '../../../config-adapters/context-provider';
import { DonateBookForm } from '../../../../domain/models/donateBookForm';
import { getDonatedBooksFiltered } from '../../../../infra/api/get-books/get-donated-books';
import { Card, ListContainer, ListPage, Nav, SubTitle } from './list-book-styled-component';


const ListBook: React.FC<ListBooksType> = ({ books }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const filteredBooks = mapFilteredBooks(books, selectedCategory);
  const navItems = getCategoryList(books);
  const { user } = useAppContext();
  const [donatedBooks, setDonatedBooks] = useState<DonateBookForm[]>();

  const filteredData = async () => {
    await getDonatedBooksFiltered(user).then((data) => {
      setDonatedBooks(data);
    });
  };
  useEffect(() => {
    filteredData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <ListPage>
      <MyDonatedBooksList donatedBooks={donatedBooks ?? []} />
      <h1
        style={{
          fontSize: '1.2rem',
          fontWeight: 'bold',
          color: 'black',
          margin: '0.4rem',
          fontFamily: 'Roboto',
        }}
      >
        Categorias
      </h1>
      <Nav>
        <ul>
          <li key={'all'} onClick={() => setSelectedCategory('all')}>
            TODOS
          </li>

          {navItems.map((item) => (
            <li key={item} onClick={() => setSelectedCategory(item)}>
              {item.toUpperCase()}
            </li>
          ))}
        </ul>
      </Nav>
      <SubTitle>Libros pendientes</SubTitle>
      <ListContainer>
        {filteredBooks.map((book, index) => (
          <Card key={book.title}>
            <ListItem
              id={`${index + 1}`}
              title={book.title}
              category={book.category}
              autor={book.autor}
              isDisabled={false}
            />
          </Card>
        ))}
      </ListContainer>
    </ListPage>
  );
};
export default ListBook;
