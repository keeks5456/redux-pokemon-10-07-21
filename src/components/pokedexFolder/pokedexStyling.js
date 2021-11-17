//styled components here
import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  height: 100%;
  width: 100%;
  border: 2px solid red;
`;

/*
color ideas 

https://www.color-hex.com/color-palette/69514
https://www.schemecolor.com/pikachu.php


*/

export const Title = styled.div`
  height: 20em;
  width: 100%;
  background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media  screen and (max-width: 768px){
    height: 150px;
    width: auto;
  }
`;

export const Card = styled.div`
  display: flex;
  justify-content: center;
  height: 30vh;
  width: 30vh;
  border: 2px solid green;
  margin: 10px;
`;

export const Image = styled.img``;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 2em;
  align-items: center;
  width: 100%;
  border: 2px solid brown;
`;

export const Button = styled.button`
  margin: 1em;
  background-color: blue;
`;
