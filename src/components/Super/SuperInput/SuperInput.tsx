import React, {DetailedHTMLProps, InputHTMLAttributes, memo} from 'react';
import {WrapperInput} from "./SuperInputStyled";

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement>

type PropsType = Omit<DefaultInputPropsType, 'type'> & {
    name: string
    type?: "text" | "number" | "email" | "password";
    color?: string
    error: string | false | undefined
}
export const SuperInput: React.FC<PropsType>  = memo(
    ({name, color, error, type,...restProps}) => {
      const {value} = {...restProps}
        const upperName = name.charAt(0).toUpperCase() + name.slice(1)
    return (
    <WrapperInput color={color!} error={error}>
      <input
          name={name}
          type={type}
          required={true}
          {...restProps}
      />
      <span>{error ? error : upperName}</span>
    </WrapperInput>
  );
});

