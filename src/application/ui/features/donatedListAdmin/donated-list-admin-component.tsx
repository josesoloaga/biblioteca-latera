import { useEffect, useState } from 'react';
import { getDonatedBooks } from '../../../../infra/api/get-books/get-donated-books';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';

type DonateBookForm = {
  name: string;
  surname: string;
  email: string;
  bookRef: string;
  studentname?: string;
};

const StyledButton = styled.button`
  width: 6rem;
  height: 3rem;
  border: 1px solid #000;
  border-radius: 5px;
  margin: 10px 0;
  padding: 0 10px;
  margin-left: auto;
  margin-right: auto;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
`;

const StyledContainerDonated = styled.ul`
  overflow: hidden;
  overflow-y: scroll;
`;

const StyledCardDonated = styled.li`
  margin: 0.6rem;
`;

const StyledNameBook = styled.h2`
  font-size: large;
  font-weight: bold;
`;

export const DonatedListAdminComponent = () => {
  const [bookDonatedListAdmin, setBookDonatedListAdmin] = useState<
    DonateBookForm[]
  >([]);

  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/new');
  };

  useEffect(() => {
    const bookDonatedData = async () => {
      try {
        const data = await getDonatedBooks();
        if (Array.isArray(data)) {
          setBookDonatedListAdmin(data as DonateBookForm[]);
        }
      } catch (error) {
        console.log(error);
      }
    };
    bookDonatedData();
  }, []);

  return (
    <StyledContainerDonated>
      {Array.isArray(bookDonatedListAdmin) &&
      bookDonatedListAdmin.length > 0 ? (
        bookDonatedListAdmin.map(
          (donatedBook: DonateBookForm, index: number) => (
            <StyledCardDonated key={index}>
              <StyledNameBook>{donatedBook.bookRef}</StyledNameBook>
              <h2>
                Donado por: {donatedBook.name} {donatedBook.surname}
              </h2>
              <p>Email: {donatedBook.email}</p>
              <p>Alumno: {donatedBook.studentname}</p>
            </StyledCardDonated>
          ),
        )
      ) : (
        <li>
          <h2>No hay donaciones.</h2>
        </li>
      )}
      <StyledButton onClick={handleBack}>Volver</StyledButton>
    </StyledContainerDonated>
  );
};
