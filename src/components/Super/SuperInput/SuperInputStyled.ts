import styled from "styled-components";

export const WrapperInput = styled.div<{color: string, error: string | false | undefined}>`
  position: relative;
  display: flex;

  input {
    width: 100%;
    padding: 10px;
    border: 2px solid ${({error}) => error ? 'red' : '#7549bb'};
    border-radius: 8px;
    outline: none;
    background: none;
    transition: 0.5s;
    font-family: 'Montserrat', sans-serif;
    color: #000000;
  }

  span {
    position: absolute;
    left: 5px;
    padding: 10px;
    pointer-events: none;
    font-size: 1em;
    color: ${({error}) => error ? 'red' : '#697594'};
    transition: 0.5s;
  }

  input:valid ~ span,
  input:focus ~ span {
    color: ${({error}) => error ? 'red' : '#7549bb'};
    background-color: ${({color}) => color ? color : '#f0f1f8'};
    transform: translateX(10px) translateY(-7px);
    font-size: 0.9em;
    padding: 0 10px;
  }
`
