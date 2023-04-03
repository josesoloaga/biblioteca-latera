import React, { useState } from 'react';
import styled from '@emotion/styled';
import ListItem from './list-item-component';
import {
  mapFilteredBooks,
  getCategoryList,
  ListBooksType,
} from '../../../domain/book';

const ListContainer = styled.div`
  display: flex;
  gap: 40px;
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
const Nav = styled.nav`
  display: flex;
  box-sizing: content-box;
  width: 100px;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  border: 1px solid #000;
  border-radius: 4px;
  padding: 10px;
  ul {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
    width: 100%;
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      font-size: 16px;
      font-weight: 500;
      color: #000;
      cursor: pointer;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
`;
const ListBook: React.FC<ListBooksType> = ({ books }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const filteredBooks = mapFilteredBooks(books, selectedCategory);
  const navItems = getCategoryList(books);

  return (
    <ListContainer>
      <Nav>
        <h1
          style={{
            fontSize: '20px',
            fontWeight: 500,
            color: '#000',
            marginBottom: '10px',
          }}
        >
          Categorias
        </h1>
        <ul>
          <li key={'all'} onClick={() => setSelectedCategory('all')}>
            TODOS
          </li>

          {navItems.map((item) => (
            <li key={item} onClick={() => setSelectedCategory(item)}>
              {item}
            </li>
          ))}
        </ul>
      </Nav>
      <div>
        <div
          style={{
            fontSize: '20px',
            fontWeight: 500,
            color: '#000',
            marginBottom: '10px',
          }}
        >
          Libros pendientes
        </div>
        {filteredBooks.map((book, index) => (
          <Card key={book.title}>
            <ListItem
              id={`${index + 1}`}
              title={book.title}
              isDisabled={false}
            />
          </Card>
        ))}
      </div>
    </ListContainer>
  );
};
export default ListBook;
