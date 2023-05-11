import React, {DetailedHTMLProps, InputHTMLAttributes, memo} from 'react';
import {WrapperTextarea} from "./SuperTextareaStyled";

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement>

type PropsType = Omit<DefaultInputPropsType, 'type'> & {
    name: string
    color?: string
    error: string | false | undefined
}
export const SuperTextarea: React.FC<PropsType>  = memo(
    ({name, color, error, ...restProps}) => {
      const {value} = {...restProps}
        const upperName = name.charAt(0).toUpperCase() + name.slice(1)
    return (
    <WrapperTextarea color={color!} error={error}>
      <textarea
          name={name}
          required={true}
          {...restProps}
      />
      <span>{error ? error : upperName}</span>
    </WrapperTextarea>
  );
});

