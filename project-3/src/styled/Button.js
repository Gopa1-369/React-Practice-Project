import styled from "styled-components"


export const Button=styled.button`

min-width:220px;
  background-color:black;
  color:white;
  padding:10px 18px;
 border-radius:5px;
 border:none;
 font-size:16px;

 &:hover{
  background-color:#5c5a5a;
  box-shadow:5px 5px 5px #5c5a5a;
 border:1px solid white;
 transition:0.3s background ease-in;
 color:black;
 
 }
`

export const  OutlineButton = styled(Button)`
background-color: black;
border:1px solid black;
color:white;



&:hover{
  background-color:white;
  box-shadow:5px 5px 5px #5c5a5a;
 border:1px solid black;
 color:black;
 
 
 }


`