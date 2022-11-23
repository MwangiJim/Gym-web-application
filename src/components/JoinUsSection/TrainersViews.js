import { faSadTear } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'

const TrainersViews = () => {
    const[Form,setForm]=React.useState({
        choice:'',
        first:'Unfriendly Environment',
        second:'Low Pay grade',
        third:'Uncooperative Trainees',
        fourth:'Low Quality Equipment',
        fifth:'Duplicate Email Closure',
        sixth:'Poor Work Ethics',
        seventh:'New Adventure',
        eigth:'Change in careeer'
    })
    function HandleResponse(e){
         setForm((prevForm)=>{
            return{
                ...prevForm,
                [e.target.name]:e.target.value
            }
         })
    }
  return (
    <Container>
       <div className='questions'>
            <div className='header'>
                <h2>We are so sad to see you leave..</h2>
                <FontAwesomeIcon icon={faSadTear} style={{color:'orange',fontSize:'25px'}}/>
            </div>
           <h4>Reason to leave BEFIT</h4>
           <div className='lines'>
              <input
               type={'radio'}
               onChange={HandleResponse}
               value={Form.first}
               name='choice'
              />
              <label>Unfriendly Environment</label>
           </div>
           <div className='lines'>
              <input
               type={'radio'}
               onChange={HandleResponse}
               value={Form.second}
               name='choice'
              />
              <label>Low Pay grade</label>
           </div>
            <div className='lines'>
              <input
               type={'radio'}
               onChange={HandleResponse}
               value={Form.third}
               name='choice'
              />
              <label>Uncooperative Trainees</label>
           </div>
           <div className='lines'>
              <input
               type={'radio'}
               onChange={HandleResponse}
               value={Form.fourth}
               name='choice'
              />
              <label>Low Quality Equipment</label>
           </div>
           <div className='lines'>
              <input
               type={'radio'}
               onChange={HandleResponse}
               value={Form.fifth}
               name='choice'
              />
              <label>Duplicate Email Closure</label>
           </div>
           <div className='lines'>
              <input
               type={'radio'}
               onChange={HandleResponse}
               value={Form.sixth}
               name='choice'
              />
              <label>Poor Work Ethics</label>
           </div>
           <div className='lines'>
              <input
               type={'radio'}
               onChange={HandleResponse}
               value={Form.seventh}
               name='choice'
              />
              <label>New Adventure</label>
           </div>
           <div className='lines'>
              <input
               type={'radio'}
               onChange={HandleResponse}
               value={Form.eigth}
               name='choice'
              />
              <label>Change In careeer</label>
           </div>
           <button>Submit Response</button>
       </div>
    </Container>
  )
}

export default TrainersViews
let Container = styled.div`
 width:100%;
 height:100vh;
 top:0;
 left:0;
 position:fixed;
 z-index:4;
 background:linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7));
 .header{
    display:flex;
    justify-content:center;
    align-items:center;
 }
 h4{
    margin:2% 0;
 }
 .questions{
    height:420px;
    width:500px;
    background:#fff;
    border-radius:8px;
    padding:7px;
    top:30%;
    position:relative;
    left:30%;
    .lines{
        padding:10px 20px;
    }
    button{
        width:100%;
        height:40px;
        border-radius:9px;
        box-shadow:2px 2px 5px #333;
        color:#fff;
        border:none;
        outline:none;
        background-color:green;
        cursor:pointer;
    }
 }
`