import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react'
import styled from 'styled-components'
import ProgressCheck from './ProgressCheck';
import { useSelector } from 'react-redux';

function Rest(props) {
   // let [time,setTime]=React.useState(30);
    let{ExerciseSchedule}= useSelector((state)=>state.gymRegucer)
   // console.log(props.NextExerciseIndex)
  return (
    <Container style={props.restStyles}>
        <div className='top__section'>
            <div className='textbox'>
                <h3>REST</h3>
                <h1>{`00:${props.TIME<10?`0${props.TIME}`:props.TIME}`}</h1>
                <Buttons>
                    <button className='addtime'>+20s</button>
                    <button className='skip'onClick={props.handler}>Skip</button>
                </Buttons>
            </div>
        </div>
        <ProgressCheck
         complete={props.Complete}
        />
        <div className='bottom__section'>
           <h3>NEXT<p>{props.NextExerciseIndex}/{ExerciseSchedule.exercise.length}</p></h3>
            {ExerciseSchedule.exercise?
             <div className='next__exercise'>
                {ExerciseSchedule.exercise.map((item,index)=>{
                    return(
                     <div className={props.NextExerciseIndex === index?'active__rest':'inactive__rest'}>
                         <div className='footer'>
                           <div className='left'>
                          <h4>{item.Name}
                             <FontAwesomeIcon icon={faQuestionCircle}/>
                         </h4>
                            <h5>{item.Frequency?item.Frequency:`00:${item.Duration}`}</h5>
                         </div>
                          <img src={item.gifPath}/>
                         </div>
                     </div>
                    )
                })}
             </div>:''
            }
        </div>
    </Container>
  )
}

export default Rest
let Container=styled.div`
width:100%;
background-color:#fff;
height:max-content;
z-index:9;
top:0px;
position:absolute;
.top__section{
    background-color:rgb(30, 102, 197);
    border-radius:7px;
    height:71vh;
    .textbox{
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        top:40%;
        position:relative;
        h3{
            color:#fff;
        }
        h1{
            color:#fff;
            font-size:50px;
        }
    }
}
.bottom__section{
 background-color:#fff;
 h3{
    display:flex;
    p{
        color:rgb(30, 102, 197);
        margin:0 1%;
    }
    margin-top:1%;
 }
 .footer{
    display:flex;
    justify-content:space-between;
    align-items:center;
    img{
        width:120px;
        height:120px;
        object-fit:cover;
    }
    .left{
        h4{
            font-size:20px;
        }
        h5{
            color:grey;
            font-size:22px;
            font-weight:300;
            margin:1% 0;
        }
    }
 }
}
`
let Buttons = styled.div`
 display:flex;
 button{
    height:35px;
    width:120px;
    border:none;
    outline:none;
    border-radius:25px;
    cursor:pointer;
    margin:0 3%;
 }
 .addtime{
    background-color:grey;
    color:#fff;
    font-size:20px;
 }
 .skip{
    color:rgb(30, 102, 197);
    font-size:18px;
    font-weight:600;
 }
`