import { useState, useEffect } from 'react';
import { GetDonatedBooksFiltered } from '../../../api/get-books/get-donated-books';
import { useAppContext } from '../../../config-adapters/context-provider';
import styled from '@emotion/styled';

type DonatedBook = {
  bookRef: string;
  index: number;
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background-color: grey;
  background-color: rgb(32, 179, 179);
`;

const Title = styled.h3`
  font-size: 2rem;
  font-weight: bold;
  color: white;
  margin: 0.4rem;
  font-family: Roboto;
`;
const BookDonated = styled.h2`
  font-size: 1.1rem;
  font-weight: bold;
  padding:.5rem;
  margin: .2rem;
  font-family: Roboto;
`;
const StyledCard = styled.div`
  display: flex;
  flex-direction: row;
  flex-warp: warp;
  align-items: center;
  justify-content: center;
  width: auto;
  height: auto;
  min-height: 3rem;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }

  @media (max-width: 468px) {
    width: 290px;
    height: auto;
  }
`;
const Li = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledDonatedBooks = styled.ul`
  display: flex;
  flex-direction: row;
  flex-warp: warp;

  gap: 0.5rem;
`;

export const MyDonatedBooksList = () => {
  const { user } = useAppContext();
  const [donatedBooks, setDonatedBooks] = useState<DonatedBook[]>();

  useEffect(() => {
    const filteredData = async () => {
      try {
        const data = await GetDonatedBooksFiltered(user);

        if (Array.isArray(data)) {
          setDonatedBooks(data.map((bookRef, index) => ({ bookRef, index })));
        }
      } catch (error) {
        console.log(error);
      }
    };
    filteredData();
  }, [user]);

  return (
    <StyledContainer>
      <Title>Mis donaciones:</Title>
      <StyledCard>
        <StyledDonatedBooks>
          {donatedBooks?.map((book, index) => (
            <Li key={index}>
              <BookDonated>{book.bookRef}</BookDonated>
            </Li>
          ))}
        </StyledDonatedBooks>
      </StyledCard>
    </StyledContainer>
  );
};
