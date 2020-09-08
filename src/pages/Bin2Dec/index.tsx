import React, { useCallback, useState, ChangeEvent, FormEvent } from 'react';
import BinaryIcon from '../../assets/binary.svg';

import { Container, Header, Form, Input, ResultContainer } from './styles';

const Bin2Dec: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [inputFocused, setInputFocused] = useState(false);
  const [calculatedValue, setCalculatedValue] = useState(0);

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const values = inputValue.split('');
      values.reverse();

      const newValues = [];

      for (let i = 0; i < values.length; i += 1) {
        const value = Number(values[i]) * 2 ** i;

        newValues.push(value);
      }

      const decimal = newValues.reduce((value, total) => value + total);

      setCalculatedValue(decimal);
    },
    [inputValue],
  );

  const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const inputNumbers = e.target.value.split('');

    if (
      inputNumbers[inputNumbers.length - 1] === '1' ||
      inputNumbers[inputNumbers.length - 1] === '0'
    ) {
      setInputValue(e.target.value);
    }
  }, []);

  const handleInputFocus = useCallback(() => {
    setInputFocused(state => !state);
  }, []);

  return (
    <>
      <Header>
        <h2>Bin2Dec</h2>
        <img src={BinaryIcon} alt="Binary" />
        <div />
      </Header>

      <Container>
        <Form onSubmit={handleSubmit} inputFocused={inputFocused}>
          <h1>Digite um número binário</h1>

          <Input
            type="text"
            pattern="[0-1]{1,8}"
            title="Only binary numbers up to 8 digits allowed"
            value={inputValue}
            onFocus={handleInputFocus}
            onBlur={handleInputFocus}
            onChange={handleInputChange}
          />

          <button type="submit">Converter para decimal</button>
        </Form>

        <ResultContainer decimalValue={calculatedValue}>
          <h1>Valor decimal equivalente</h1>

          <span>{calculatedValue}</span>
        </ResultContainer>
      </Container>
    </>
  );
};

export default Bin2Dec;
