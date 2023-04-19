import React, { useEffect, useState } from 'react';
import ListBook from '../ui/features/list-book/list-book-component';
import { useAppContext } from '../config-adapters/context-provider';
import styled from '@emotion/styled';
import { Book } from '../../domain/models/book';
import { DonateBookForm } from '../../domain/models/donateBookForm';
import {
  getAllBooks,
  getDonatedBooks,
} from '../../infra/api/get-books/get-books';
import { createBookListMock } from '../../infra/mock/mock-examples';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../../domain/services/assets/fondoBibliotecaLatera.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 768px) {
    height: 100%;
    width: 100%;
  }

  @media (max-width: 425px) {
    height: 100%;
    width: 100%;
  }
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 2rem;
  margin-top: 2rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
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
        <Title>Bienvenido a la biblioteca, {user?.split('@')[0]}!</Title>
      </Header>
      <ListBook books={filterAllBooks ?? []} />
    </Container>
  );
};

export default HomePage;
