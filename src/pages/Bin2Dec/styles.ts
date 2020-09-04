import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px;
  flex: 1;
  height: 144px;
  background: #4542c9;
  margin-bottom: 50px;

  h2 {
    color: #fff;
    font-weight: 600;
    font-size: 32px;
  }

  img {
    width: 94px;
    height: 94px;
    border-radius: 15%;
    margin-right: 110px;
  }

  svg {
    color: #fff;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 200px;
  max-width: 600px;
  padding: 20px;

  h1 {
    color: #5b5b5b;
    font-size: 48px;
  }
`;

export const ResultContainer = styled.div``;
