import React, { useContext } from 'react'
import styled from 'styled-components'
import { LangaugeSetter } from './Virtualworkout'

function Languages(){
    let languages = useContext(LangaugeSetter);//Using Context created
    let [Form,setForm]=React.useState({
        Default:'',
        Selected:''
    })
    const HandleInput=(e)=>{
        setForm((prevForm)=>{
            return{
                ...prevForm,
                [e.target.name]:e.target.value
            }
        })
    }
    console.log(Form.Default)
    let [text,setText]=React.useState(null);
    return (
       <Container>
         <input
          type={'radio'}
          onChange={HandleInput}
          name='Default'
          value={Form.Default}
         />
         <label>Choose Langauge</label>
         {languages.map((langauge)=>{
            return(
                <div className='languages'>
                    <input
                     type={'radio'}
                     onChange={HandleInput}
                     name='Selected'
                     value={langauge}
                    />
                    <label>{langauge}</label>
                </div>
            )
         })}
       </Container>
    )
  }
 export default Languages

let Container = styled.div`
 bottom:625px;
 height:93vh;
 position:relative;
 width:100%;
 background-color:#fff;
 z-index:5;
    input{
        margin:3% 1%;
    }
    label{
        margin:7% 0;
    }
    p{
        cursor:pointer;
    }
`
