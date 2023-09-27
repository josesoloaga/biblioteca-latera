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
      {!!donatedBooks?.length && (
        <>
          <Title>Mis donaciones</Title>
          <StyledContainer>
            <StyledCard>
              <StyledDonatedBooks>
                {donatedBooks?.map((book, index) => (
                  <Li key={book.bookRef + index}>
                    <BookDonated>{book.bookRef},</BookDonated>
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
