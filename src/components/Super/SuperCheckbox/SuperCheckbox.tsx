import React, {DetailedHTMLProps, InputHTMLAttributes} from 'react';
import styled from "styled-components";

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement>

export const SuperCheckbox: React.FC<Omit<DefaultInputPropsType, 'type'>> = (
    {children, ...restProps}) => {
    return (
        <Wrapper className="grid">
            <input type="checkbox" {...restProps}/>
            <span>{children}</span>
        </Wrapper>
    );
};

 const Wrapper = styled.div`
   display: flex;
   gap: 5px;
 }

 input {
   --active: #7549bb;
   --active-inner: #fff;
   --border: #ccc4d4;
   --border-hover: #7448ba;
   --disabled: #f6f8ff;
   --disabled-inner: #e1e6f9;
   -webkit-appearance: none;
   height: 22px;
   min-width: 22px;
   outline: none;
   display: flex;
   position: relative;
   cursor: pointer;
   border: 1px solid var(--bc, var(--border));
   background: var(--b, var(--background));
   transition: background 0.3s, border-color 0.3s, box-shadow 0.2s;

   &:after {
     content: "";
     display: block;
     left: 0;
     top: 0;
     position: absolute;
     transition: transform var(--d-t, 0.3s) var(--d-t-e, ease),
     opacity var(--d-o, 0.2s);
   }

   &:checked {
     --b: var(--active);
     --bc: var(--active);
     --d-o: 0.3s;
     --d-t: 0.6s;
     --d-t-e: cubic-bezier(0.2, 0.85, 0.32, 1.2);
   }

   &:disabled {
     --b: var(--disabled);
     cursor: not-allowed;
     opacity: 0.9;

     &:checked {
       --b: var(--disabled-inner);
       --bc: var(--border);
     }

     & + label {
       cursor: not-allowed;
     }
   }

   &:hover {
     &:not(:checked) {
       &:not(:disabled) {
         --bc: var(--border-hover);
       }
     }
   }

   &:focus {
     box-shadow: 0 0 0 var(--focus);
   }

   &:not(.switch) {
     width: 21px;

     &:after {
       opacity: var(--o, 0);
     }

     &:checked {
       --o: 1;
     }
   }
 }

 input[type="checkbox"] {
   &:not(.switch) {
     border-radius: 7px;

     &:after {
       width: 5px;
       height: 9px;
       border: 2px solid var(--active-inner);
       border-top: 0;
       border-left: 0;
       left: 7px;
       top: 4px;
       transform: rotate(var(--r, 20deg));
     }

     &:checked {
       --r: 43deg;
     }
   }

   &.switch {
     width: 38px;
     border-radius: 11px;

     &:after {
       left: 2px;
       top: 2px;
       border-radius: 50%;
       width: 15px;
       height: 15px;
       background: var(--ab, var(--border));
       transform: translateX(var(--x, 0));
     }

     &:checked {
       --ab: var(--active-inner);
       --x: 17px;
     }

     &:disabled {
       &:not(:checked) {
         &:after {
           opacity: 0.6;
         }
       }
     }
   }
 `



