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
import backgroundImage from '../../domain/services/assets/backFinal.jpg';
import { capilizeFirstLetter } from '../../domain/services/utils';

const Container = styled.div`
  min-height: 100vh;
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

const ButtonLogout = styled.button`
  width: 5rem;
  height: 1.5rem;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background-color: rgb(44, 170, 187);
  font-weight: bold;
  border-radius: 20px;
  border: none;
  box-shadow: 0px 0px 2px 1px rgb(36, 145, 160);
`;

const HomePage = () => {
  const { user, setUser } = useAppContext();
  const navigate = useNavigate();
  const mockBooks: Book[] = createBookListMock();

  const [allBooks, setAllBooks] = useState<Book[] | null>(mockBooks);
  const [donatedBooks, setDonatedBooks] = useState<DonateBookForm[] | null>();

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

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
        <Title>
          Bienvenido a la biblioteca,{' '}
          {capilizeFirstLetter(user?.split('@')[0] ?? '')}!
        </Title>
      </Header>
      <ListBook books={filterAllBooks ?? []} />
      <ButtonLogout onClick={handleLogout}>Logout</ButtonLogout>
    </Container>
  );
};

export default HomePage;
