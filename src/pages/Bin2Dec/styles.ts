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
  /* justify-content: space-between; */
  /* height: 250px; */
  max-width: 600px;
  padding: 0 20px;

  h1 {
    color: #5b5b5b;
    font-size: 42px;
    margin-bottom: 20px;
  }

  input {
    width: 400px;
    height: 50px;
    border-radius: 10px;
    text-align: center;
    font-size: 24px;
    color: #635959;
    letter-spacing: 5px;
    border: none;
    border: 2px solid #4542c9;
    margin: 20px;
    background: #f4f4f4;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  button {
    height: 50px;
    width: 400px;
    margin: 20px;
    border-radius: 10px;
    border: none;
    color: #fff;
    background: #4542c9;
    font-size: 16px;
    transition: background-color 0.2s;

    &:hover {
      background: #3331b7;
    }
  }
`;

export const ResultContainer = styled.div`
  /* display: flex; */
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 180px;
  margin-top: 40px;

  h1 {
    color: #5b5b5b;
    font-size: 42px;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #4542c9;
    width: 180px;
    height: 100px;
    font-size: 56px;
    border-radius: 10px;
    color: #fff;
  }
`;
