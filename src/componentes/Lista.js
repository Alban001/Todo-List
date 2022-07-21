import React from 'react';
import { Box,Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { BoxListado, MyContainerLista } from './Stylo';


const Lista = ({Creado, texto, lista,setLista, setInput, list}) => {


    const completoHandler=()=>{
        setLista(
            lista.map((item) =>{
            if(item.id === list.id){
                return {
                    ...item, completo:!item.completo
                }
            }
            return item;
        }))
    }
    const handleEliminar =(e, index )=>{
        e.preventDefault();
         const nuevaLista =lista;
         nuevaLista.splice(index,1)
       setLista([...nuevaLista])
    }

    return (
        <MyContainerLista>
                <BoxListado fontSize={14} p={0.1}  m={1} >
                    <li className={`${list.completo? "completo" :''}`} >{texto} <br/> Creado : {Creado}</li>
               </BoxListado>
               <Box pr={2}>
                    <Button onClick={completoHandler}><CheckCircleIcon fontSize='large' /></Button>
              </Box>
              <Box>
                  <Button onClick={handleEliminar}><DeleteIcon fontSize='large' /></Button>
              </Box>
              
              
        </MyContainerLista>
            
      
        
      );
}
 
export default Lista;