import styled from "styled-components";

export const WrapperTextarea = styled.div<{color: string, error: string | false | undefined}>`
  position: relative;
  display: flex;

  textarea {
    box-sizing: border-box;
    resize: none; /* отключаем возможность изменять размеры полей */
    overflow: auto; /* скрываем скроллбары */
    min-height: 40px; /* устанавливаем минимальную высоту */
    white-space: pre-wrap; /* позволяет переносить текст по словам */
    word-wrap: break-word; /* позволяет переносить слова, которые не помещаются в одну строку */
    width: 100%;
    height: auto;
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

  textarea:valid ~ span,
  textarea:focus ~ span {
    color: ${({error}) => error ? 'red' : '#7549bb'};
    background-color: ${({color}) => color ? color : '#f0f1f8'};
    transform: translateX(10px) translateY(-7px);
    font-size: 0.9em;
    padding: 0 10px;
  }
`
