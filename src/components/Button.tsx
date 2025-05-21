import React from 'react';
import styled, { css } from 'styled-components';

interface ButtonProps {
  type: 'primary' | 'secondary';
  onClick: () => void;
  children: React.ReactNode;
}

const StyledButton = styled.button<{ type: 'primary' | 'secondary' }>
  ${({ type }) => type === 'primary' ? css`
    background: #0052CC;
    color: #FFFFFF;
  ` : css`
    background: transparent;
    color: #0052CC;
    border: 1px solid #0052CC;
  `}
  font-family: 'Roboto', sans-serif;
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color ease-in-out 0.2s;
  &:hover {
    background-color: ${({ type }) => (type === 'primary' ? '#003994' : '#f0f4ff')};
  }
};

const Button: React.FC<ButtonProps> = ({ type, children, onClick }) => {
  return (<StyledButton type={type} onClick={onClick}>{children}</StyledButton>);
};

export default React.memo(Button);