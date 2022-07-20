import React, {useState, useEffect} from 'react';
import {Box} from '@mui/material';
import Lista from './componentes/Lista';
import './App.css'
import { MyContainer, MyInput, ButtonAgregar, MyTypography} from './componentes/Stylo';
import BasicSelect from './componentes/Selector'


function App() {

const [input,setInput] = useState('');
const [lista, setLista]=useState([]);
const [filtro, setFiltro] = useState([]);
const [status, setStatus] = React.useState('listado');


useEffect(()=>{
  handleFiltrado();
},[lista,status])

const handleSubmit =(e)=>{
  e.preventDefault()
 const Creado=new Date().toLocaleString();
 setLista(
     [...lista,{id: Math.random()*100, text:input,newDate:JSON.stringify(Creado), completo:false, eliminado: false }]
 )
 setInput('')
}

 const handleFiltrado=()=>{
     switch(status){
       case 'completo':
       setFiltro(lista.filter(list => list.completo === true )) // por medio del filtrado cargo a lista
       break;
       case 'incompleto':
       setFiltro(lista.filter(list => list.completo === false ))
       break;
       default:
      setFiltro(lista)
      break;
     }
 }


 const handleChange =(e)=>{
   setInput((
     e.target.value
   ))
   
 }
 
  return (
    <div >
      <form  onSubmit={handleSubmit}>
         <MyContainer>
         <Box  pt={7} fontSize={11}>
            
            <Box  pr={8} pb={5}  sx={{fontWeight: 'bold',color:'black',fontStyle: 'italic'}}>
              <MyTypography variant='h4'>LISTADO DE TAREAS</MyTypography>
            </Box>
            
             <Box display='flex' flexDirection='row'>
             <MyInput 
                 id="string" placeholder="Ingresa Una Tarea" type='string' name='string' 
                 value={input}
                  onChange={handleChange}
                  />
                <ButtonAgregar type='submit' size='small' variant='contained'>Agregar</ButtonAgregar>
                <BasicSelect status={status} setStatus={setStatus}/>
            </Box>
           
             <ul>
                 {filtro.map((list)=>
                  (<Lista key={lista.id}
                   texto={list.text} 
                   Creado={list.newDate} 
                   lista={lista} 
                   setLista={setLista} 
                   setInput={setInput}
                   list={list}
                   />
                   ))}
            </ul>
        </Box>
        
      </MyContainer>
      </form>   
    </div>  
  );
}
export default App;
