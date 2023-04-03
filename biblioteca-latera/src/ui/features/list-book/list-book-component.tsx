import React from 'react';
import styled from '@emotion/styled';
import ListItem from './list-item-component';
import { Book } from '../../../domain/book';

type ListBooksType = {
  books: Book[];
};

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Card = styled.div`
  background-color: #fff;
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 10px;
  padding: 10px;
  width: 400px;
`;

const ListBook: React.FC<ListBooksType> = ({ books }) => {
  //TODO: hacer llamada a bbdd para ver que libros hay como donados y generar el disabled con un filter en la prop

  return (
    <ListContainer>
      {books.map((book, index) => (
        <Card key={book.title}>
          <ListItem id={`${index + 1}`} title={book.title} isDisabled={false} />
        </Card>
      ))}
    </ListContainer>
  );
};

export default ListBook;
