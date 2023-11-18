import styled from "styled-components";

export const Form = styled.form`
width:320px;
display:flex;
flex-direction:column;
gap:20px;`

export const Label = styled.label`
 display: flex;
  flex-direction: column;
  margin-bottom: 16px;`

export const Btn = styled.button `
margin-top: 5px;
 height: 35px;
 border-radius: 4px;
 border: none;
 background-color: #4CAF50;
  &:hover,
  &:focus{
    background-color: #45a049;
  };`