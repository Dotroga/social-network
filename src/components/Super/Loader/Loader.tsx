import React from 'react';
import styled from "styled-components";

 export const Loader = () => {
    return <Wrapper>
            <div className="container">
                <span className="circle"></span>
                <span className="circle"></span>
                <span className="circle"></span>
                <span className="circle"></span>
            </div>
        </Wrapper>
}

const Wrapper = styled.div`
  position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
  .container{
    height: 5px;
    width: 52.5px;
    display: flex;
    position: relative;
     .circle {
      width: 7.5px;
      height: 7.5px;
      border-radius: 50%;
      background-color: #fff;
      animation: move 500ms linear 0ms infinite;
      margin-right: 15px;
      &:first-child{
        position: absolute;
        top:0;
        left:0;
        animation: grow 500ms linear 0ms infinite;
      }
      &:last-child{
        position: absolute;
        top: 0;
        right: 0;
        margin-right: 0;
        animation: grow 500ms linear 0s infinite reverse;
      }
    }
  }
  @keyframes grow {
    from {transform: scale(0,0); opacity: 0;}
    to {transform: scale(1,1); opacity: 1;}
  }
  @keyframes move {
    from {transform: translateX(0px)}
    to {transform: translateX(22.5px)}
  }
`

