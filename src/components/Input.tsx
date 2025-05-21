import React, { useState } from 'react';
import styled from 'styled-components';

interface InputProps {
  error?: string;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Container = styled.div`margin-bottom: 16px;`;
const StyledInput = styled.input<{ hasError: boolean }>
  border: 2px solid ${({ hasError }) => (hasError ? '#FF5630' : '#6B778C')};
  &:focus {
    border-color: #0052CC;
  }
  padding: 8px;
  border-radius: 4px;
`;
const Label = styled.label`font-size: 14px; color: #6B778C;`;
const ErrorMessage = styled.span`color: #FF5630; font-size: 12px;`;

const Input: React.FC<InputProps> = ({ error, label, onChange }) => {
  const [value, setValue] = useState('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    onChange(event);
  };
  return (
    <Container>
      <Label>{label}</Label>
      <StyledInput hasError={!!error} value={value} onChange={handleChange} />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};

export default Input;