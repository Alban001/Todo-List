import styled from"styled-components";import{Container,Input,Box,Button,Typography,Select}from"@mui/material";export const MyContainer=styled.div`
  margin-top:4rem;
  display: flex;
  justify-content:center;
  align-items:center;
  align:center;
  background-color:#ffeead;
  border-radius:8px;
  height: 100%;
  width:50%;
  box-shadow: 6px 12px 12px black;
  margin-left:25%;

  @media (max-width: 468px) {
      width:80%;
      display:flex;
      aling-item:center;
      margin-left:7%;
      }`;export const formu=styled.form`
      margin-left:4rem;
  `;export const MyInput=styled(Input)({backgroundColor:"#ffd480",borderRadius:"0.5rem",height:"2rem",width:"50%",marginLeft:"1rem",marginRight:"0.3rem"});export const MyContainerLista=styled.div`
              display:flex; 
              flex-direction:row;
              align-items:center;
              height:3rem;
              alig-items:center;
              
  `;export const BoxListado=styled.div`
            background-color:#ffd480;
            height:1.5rem;
            border-radius:7px;
            text-align:center;
            font-family: 'Special Elite';
            width:80%;
            padding-top:1rem;
            margin-top:1rem;
  `;export const ButtonAgregar=styled(Button)({marginBottom:"5px",marginLeft:"3px",padding:"14px",color:"#ffd480",backgroundColor:"#454140",fontFamily:"Special Elite",height:"2rem"});export const MyTypography=styled(Typography)({fontFamily:"Special Elite"});export const MySelector=styled(Select)({marginLeft:"10px",width:"3rem",height:"2rem",fontSize:"1.2rem",color:"#ffd480",backgroundColor:"#454140",fontFamily:"Special Elite"});