import { useNavigate } from 'react-router-dom';
import { DonateBookForm } from '../../../../domain/models/donateBookForm';
import {
  StyledButton,
  StyledCardDonated,
  StyledContainerDonated,
  StyledNameBook,
} from './donated-list-admin.styled-component';
import { getDonatedBooks } from '../../../../infra/api/get-books/get-books';
import { useEffect, useState } from 'react';


const DonatedListAdminComponent: React.FC = () => {
  const [bookDonatedListAdmin, setBookDonatedListAdmin] = useState<any[]>([]);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/new');
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getDonatedBooks();
        if (data) {

          setBookDonatedListAdmin(data);
        } else {
          console.error('No se encontraron datos de donaciones.');
        }
      } catch (error) {
        console.error('Error fetching donated books:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <StyledContainerDonated>
      {bookDonatedListAdmin.length ? (
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

export default DonatedListAdminComponent;
