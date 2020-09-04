import React from 'react';
import BinaryIcon from '../../assets/binary.svg';

import { Container, Header, Form, ResultContainer } from './styles';

const Bin2Dec: React.FC = () => {
  return (
    <>
      <Header>
        <h2>Bin2Dec</h2>
        <img src={BinaryIcon} alt="Binary" />
      </Header>

      <Container>
        <Form>
          <h1>Digite um número binário</h1>

          <input type="number" value="101001" />

          <button type="submit">Converter para decimal</button>
        </Form>

        <ResultContainer>
          <h1>Valor decimal equivalente</h1>

          <span>41</span>
        </ResultContainer>
      </Container>
    </>
  );
};

export default Bin2Dec;
