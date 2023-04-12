import { useState, useEffect } from 'react';
import { GetDonatedBooksFiltered } from '../../api/get-books/get-donated-books';
import { useAppContext } from '../../config-adapters/context-provider';
import styled from '@emotion/styled';

type DonatedBook = {
  bookRef: string;
  index: number;
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: indigo;
`;
const SubTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 0.3rem;
`;
const StyledCard = styled.div`
  width: 300px;
  font-family: sans-serif;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #000;
  border-radius: 5px;
  margin: 10px 0;
  padding: 10px 5px;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034);
  background: #fff;
  overflow: scroll;

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
  margin-bottom: 1px;
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
        <ul>
          {donatedBooks?.map((book, index) => (
            <Li key={index}>
              <SubTitle>{book.bookRef}</SubTitle>
            </Li>
          ))}
        </ul>
      </StyledCard>
    </StyledContainer>
  );
};
