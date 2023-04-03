import React, { useEffect, useState } from 'react';
import ListBook from '../ui/features/list-book/list-book-component';
import { useAppContext } from '../config-adapters/context-provider';
import styled from '@emotion/styled';
import { Book } from '../domain/book';
import { DonateBookForm } from '../domain/donateBookForm';
import { getAllBooks, getDonatedBooks } from '../api/get-books/get-books';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  background-color: #3759f2;
  background-image: linear-gradient(45deg, #3759f2 0%, #99dee6 100%);
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 30px;
  margin-top: 30px;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
`;

const HomePage = () => {
  const { user } = useAppContext();

  const [allBooks, setAllBooks] = useState<Book[]>([]);
  const [donatedBooks, setDonatedBooks] = useState<DonateBookForm[]>([]);

  useEffect(() => {
    getAllBooks().then((data) => {
      setAllBooks(data as Book[]);
    });
    getDonatedBooks().then((data) => {
      setDonatedBooks(data as DonateBookForm[]);
    });
  }, []);
  //TODO: Limpiar allbooks de todos los titulos en donateBooks (filter/map)
  const filterAllBooks = allBooks.filter((book: Book) => {
    return donatedBooks.every(
      (donatedBook: DonateBookForm) => donatedBook.bookRef !== book.title,
    );
  });

  //TODO: Menu con route para introducir nuevos libros- tipos book api= postBook

  return (
    <Container>
      <Header>
        <Title>Bienvenido a la biblioteca, {user}!</Title>
      </Header>
      <ListBook books={filterAllBooks} />
    </Container>
  );
};

export default HomePage;
