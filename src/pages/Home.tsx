import React from 'react';
import ListBook from '../ui/features/list-book/list-book-component';
import { useAppContext } from '../config-adapters/context-provider';
import styled from '@emotion/styled';
import { createBookListMock } from '../api/mock/mock-examples';
import { Book } from '../domain/book';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  background-color: #3759F2;
  background-image: linear-gradient(45deg, #3759F2 0%, #99DEE6 100%); 
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
  const mockBooks: Book[] = createBookListMock();

  return (
    <Container>
      <Header>
        <Title>Bienvenido a la biblioteca, {user}!</Title>
      </Header>
      <ListBook books={mockBooks} />
    </Container>
  );
};

export default HomePage;
