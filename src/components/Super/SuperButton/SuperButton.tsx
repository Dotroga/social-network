import React, {memo} from 'react';
import styled, {css} from "styled-components";
import {Loader} from "../Loader/Loader";

interface ButtonProps
    extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {
  title: string
  loading?: boolean;
  color?: string;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
}

export const SuperButton: React.FC<ButtonProps> = memo((
    {title, loading, color, ...restProps}) => {
  return <Button title={title} loading={loading} color={color} {...restProps}>
    {loading && <Loader/>}
    {title}
  </Button>
});

const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  ${({disabled})=>!disabled && css`
    cursor: pointer;
    &:hover {filter: brightness(90%);}
    &:active {filter: brightness(110%);}
  `};
  opacity: ${({disabled})=>disabled && '0.6'};
  height: 37px;
  min-width: 60px;
  padding: 5px;
  color: ${({loading})=> loading ? '#7448ba' :'white'};
  background-color: ${({color})=>color ? color : '#7448ba'};
  border-radius: 8px;
  border: none;
  transition: 0.2s;
`




