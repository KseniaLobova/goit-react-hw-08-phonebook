import styled from "styled-components";

export const Container = styled.div`
display:flex;
gap:10px;
align-items:center;`

export const Btn =styled.button `
 height: 35px;
 border-radius: 4px;
 border: none;
 background-color: #4CAF50;
  &:hover,
  &:focus{
    background-color: #45a049;
  };`

export const Text = styled.p`
  font-size:20px;
  font-weight:700;`