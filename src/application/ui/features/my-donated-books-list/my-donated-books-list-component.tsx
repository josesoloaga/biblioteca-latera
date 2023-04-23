import styled from '@emotion/styled';
import { DonateBookForm } from '../../../../domain/models/donateBookForm';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background-color: rgb(32, 179, 179);
  border-radius: 3px;
  box-shadow: 0px 0px 2px 1px rgba(21, 160, 170, 0.836);
`;

const Title = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
  margin: 0.4rem;
  font-family: Roboto;
`;
const BookDonated = styled.h2`
  font-size: 1rem;
  font-weight: bold;
  font-family: Roboto;
  margin: 0.2rem 0.5rem 0.2rem 0rem;
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
`;

const StyledDonatedBooks = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: left;
`;
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
                {donatedBooks?.map((book) => (
                  <Li key={book.bookRef}>
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
