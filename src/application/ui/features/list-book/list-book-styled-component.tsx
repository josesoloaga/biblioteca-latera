import styled from '@emotion/styled';

export const ListPage = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  margin-right: 1rem;
`;

export const ListContainer = styled.div`
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

export const Card = styled.div`
  border-radius: 2px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 8px;
  background-color: rgba(250, 244, 244, 0.9);
  width: 20%;
  height: 70px;
  @media (max-width: 768px) {
    width: 40%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;
export const Nav = styled.nav`
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
export const SubTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: bold;
  color: black;
  margin: 0.4rem;
  font-family: Roboto;
`;
