import { DonateBookForm } from '../../../../domain/models/donateBookForm';
import {
  BookDonated,
  Li,
  StyledCard,
  StyledContainer,
  StyledDonatedBooks,
  Title,
} from './my-donated-books-list-styled-component';

type MyDonatedBooksListProps = {
  donatedBooks: DonateBookForm[];
};

const MyDonatedBooksList: React.FC<MyDonatedBooksListProps> = ({
  donatedBooks,
}) => {

  return (
    <>
      {donatedBooks?.length > 0 && (
        <>
          <Title>Mis donaciones</Title>
          <StyledContainer>
            <StyledCard>
              <StyledDonatedBooks>
                {donatedBooks?.map((book, index) => (
                  <Li key={index}>
                    <BookDonated>{book as any}</BookDonated>
                  </Li>
                ))}
              </StyledDonatedBooks>
            </StyledCard>
          </StyledContainer>
        </>
      )}
    </>
  );
};

export default MyDonatedBooksList;
