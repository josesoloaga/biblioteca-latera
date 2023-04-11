import React, { useEffect, useState } from 'react';
import ListBook from '../ui/features/list-book/list-book-component';
import { useAppContext } from '../config-adapters/context-provider';
import styled from '@emotion/styled';
import { Book } from '../domain/book';
import { DonateBookForm } from '../domain/donateBookForm';
import { getAllBooks, getDonatedBooks } from '../api/get-books/get-books';
import { createBookListMock } from '../api/mock/mock-examples';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
  const mockBooks: Book[] = createBookListMock();

  const [allBooks, setAllBooks] = useState<Book[] | null>(mockBooks);
  const [donatedBooks, setDonatedBooks] = useState<DonateBookForm[] | null>();

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
    user &&
      getAllBooks().then((data) => {
        setAllBooks(data as Book[]);
      });
    user &&
      getDonatedBooks().then((data) => {
        setDonatedBooks(data as DonateBookForm[]);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  const filterAllBooks = allBooks?.filter((book: Book) => {
    return donatedBooks?.every(
      (donatedBook: DonateBookForm) => donatedBook.bookRef !== book.title,
    );
  });

  return (
    <Container>
      <Header>
        <Title>Bienvenido a la biblioteca, {user}!</Title>
      </Header>
      <ListBook books={filterAllBooks ?? []} />
    </Container>
  );
};

export default HomePage;
