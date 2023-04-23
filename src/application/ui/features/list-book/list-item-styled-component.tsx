import styled from '@emotion/styled';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: ${(props: { isDisabled: boolean }) =>
    props.isDisabled ? 'line-through' : 'none'};
  margin-top: 0.3rem;
  font-family: Roboto;
`;

export const Number = styled.span`
  font-size: 1rem;
  font-weight: bold;
  opacity: 0.5;
  position: absolute;
  left: 0rem;
`;

export const Title = styled.h3`
  font-size: 1.3rem;
  font-weight: bold;
  width: 80%;
`;

export const SubTitle = styled.h3`
  font-size: 1rem;
  color: rgb(51, 50, 49);
  width: 80%;
  font-style: oblique;
  margin-top: 0.2rem;
`;

export const DonarButton = styled.button`
  margin: 10px auto;
  display: block;
  padding: 10px;
  background-color: #009688;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    background-color: #00796b;
  }
`;

export const HeadCheck = styled.input`
  position: absolute;
  right: 0rem;
`;

export const HeadLabel = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  justify-content: space-between;
`;