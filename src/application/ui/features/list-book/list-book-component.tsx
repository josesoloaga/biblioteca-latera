import React, { useState } from 'react';
import styled from '@emotion/styled';
import ListItem from './list-item-component';
import {
  mapFilteredBooks,
  getCategoryList,
  ListBooksType,
} from '../../../../domain/models/book';
import { MyDonatedBooksList } from '../my-donated-books-list/my-donated-books-list-component';

const ListPage = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  margin-right: 1rem;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 40px;
  width: 100%;
  height: 370px;
  overflow: hidden;
  overflow-y: scroll;
  margin-bottom: 40px;
`;

const Card = styled.div`
  border-radius: 2px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 8px;
  background-color: rgba(250, 244, 244, 0.8);
  width: 20%;
  @media (max-width: 768px) {
    width: 40%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;
const Nav = styled.nav`
  display: flex;
  box-sizing: content-box;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  width: 100%;
  justify-content: center;

  border-radius: 4px;
  padding: 3px;
  font-family: Roboto;

  ul {
    display: flex;
    flex-warp: warp;
    gap: 10px;
    align-items: center;
    list-style: none;

    li {
      font-size: 14px;
      font-weight: bold;

      background-color: rgb(227, 231, 235, 0.9);
      padding: 0.8rem;
      border-radius: 50px;
      cursor: pointer;
      &:hover {
        transform: scale(1.1);
      }
    }
  }

  @media (max-width: 768px) {
    width: 100%;

    ul {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;

      li {
        font-size: 12px;
        font-weight: bold;
      }
    }
  }
`;
const SubTitle = styled.h2`
  font-size: 1.3rem;
  font-weight: bold;
  margin-top: 0.3rem;
  margin-bottom: 0.3rem;
`;

const ListBook: React.FC<ListBooksType> = ({ books }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const filteredBooks = mapFilteredBooks(books, selectedCategory);
  const navItems = getCategoryList(books);

  return (
    <ListPage>
      <MyDonatedBooksList />
      <h1
        style={{
          fontSize: '1.3rem',
          fontWeight: 'bold',
          marginBottom: '10px',
          marginTop: '10px',
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
