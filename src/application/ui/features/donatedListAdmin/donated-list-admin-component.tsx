import { useNavigate } from 'react-router-dom';
import { DonateBookForm } from '../../../../domain/models/donateBookForm';
import { StyledButton, StyledCardDonated, StyledContainerDonated, StyledNameBook } from './donated-list-admin.styled-component';



type DonatedListAdminPageProps = {
  bookDonatedListAdmin: DonateBookForm[];
};

const DonatedListAdminComponent: React.FC<DonatedListAdminPageProps> = ({
  bookDonatedListAdmin,
}) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/new');
  };

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
