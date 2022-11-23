import { faBoltLightning } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { setExerciseGifs, SetTotalTime, setVisibility, SetWorkoutDetails,SetExerciseIcons } from '../../redux/reducers/reducerSlice'
import AbsIntermediate from '../Data/AbsIntermediate'
import Armbeginner from '../Data/ArmBeginner'
import ArmIntermediate from '../Data/ArmIntermediate'
import ChestBeginner from '../Data/ChestBeginner'
import chestIntermediate from '../Data/ChestIntermediate'
import AbsBeginner from '../Data/ExerciseFiles'
import LegBeginner from '../Data/LegBeginner'
import LegIntermediate from '../Data/LegIntermediate'
import ShoulderBeginner from '../Data/ShoulderBackBeginner'
import ShoulderIntermediate from '../Data/ShoulderIntermediate'
import AbsAdvanced from '../Data/AbsAdvanced'
import chestAdvanced from '../Data/ChestAdvanced'
import ArmAdvanced from '../Data/ArmAdvanced'
import LegAdvanced from '../Data/LegAdvanced'
import ShoulderAdvanced from '../Data/ShoulderAdvanced'


const WorkoutButtons = (props) => {
    //let Date_Accessed = moment().toDate()
    let dispatch = useDispatch()
    const SetWorkoutdetails = ()=>{
     
        dispatch(SetWorkoutDetails({
            BannerImage:props.imagebackground,
            ExerciseType:props.Exercise
        }))
        dispatch(setVisibility(true))
        //alert(`i clicked button ${props.id}`)
        if(props.id===1){
            dispatch(SetTotalTime(20));
            dispatch(SetExerciseIcons({
                image:'/Images/abs.png'
            }))
            dispatch(setExerciseGifs({
              exercise:AbsBeginner
            }))
        }
        if(props.id===2){
            dispatch(SetExerciseIcons({
                image:'/Images/chest.png'
            }))
            dispatch(SetTotalTime(7));
            dispatch(setExerciseGifs({
                exercise:ChestBeginner
            }))
        }
        if(props.id===3){
            dispatch(SetExerciseIcons({
                image:'/WorkoutGifs/arm.webp'
            }))
            dispatch(SetTotalTime(17));
            dispatch(setExerciseGifs({
                exercise:Armbeginner
            }))
        }
        if(props.id===4){
            dispatch(SetExerciseIcons({
                image:'/Images/legs.png'
            }))
            dispatch(SetTotalTime(26));
            dispatch(setExerciseGifs({
                exercise:LegBeginner
            }))
        }
        if(props.id === 5){
            dispatch(SetExerciseIcons({
                image:'/Images/shoulderandback.png'
            }))
            dispatch(SetTotalTime(17));
            dispatch(setExerciseGifs({
                exercise:ShoulderBeginner
            }));
        }
        if(props.id === 6){
            dispatch(SetExerciseIcons({
                image:'/Images/abs.png'
            }))
            dispatch(SetTotalTime(29));
            dispatch(setExerciseGifs({
                exercise:AbsIntermediate
            }));
        }
        if(props.id === 7){
            dispatch(SetExerciseIcons({
                image:'/Images/chest.png'
            }))
            dispatch(SetTotalTime(15))
            dispatch(setExerciseGifs({
                exercise:chestIntermediate
            }))
        }
        if(props.id === 8){
            dispatch(SetExerciseIcons({
                image:'/WorkoutGifs/arm.webp'
            }))
            dispatch(SetTotalTime(26))
            dispatch(setExerciseGifs({
                exercise:ArmIntermediate
            }))
        }
        if(props.id === 9){
            dispatch(SetExerciseIcons({
                image:'/Images/legs.png'
            }))
            dispatch(SetTotalTime(41));
            dispatch(setExerciseGifs({
                exercise:LegIntermediate
            }))
        }
        if(props.id === 10){
            dispatch(SetExerciseIcons({
                image:'/Images/shoulderandback.png'
            }))
            dispatch(SetTotalTime(19));
            dispatch(setExerciseGifs({
                exercise:ShoulderIntermediate
            }))
        }
        if(props.id === 11){
            dispatch(SetExerciseIcons({
                image:'/Images/abs.png'
            }))
            dispatch(SetTotalTime(36))
            dispatch(setExerciseGifs({
                exercise:AbsAdvanced
            }))
        }
        if(props.id===12){
            dispatch(SetExerciseIcons({
                image:'/Images/chest.png'
            }))
            dispatch(SetTotalTime(19))
            dispatch(setExerciseGifs({
                exercise:chestAdvanced
            }))
        }
        if(props.id === 13){
            dispatch(SetExerciseIcons({
                image:'/WorkoutGifs/arm.webp'
            }))
            dispatch(SetTotalTime(32))
            dispatch(setExerciseGifs({
                exercise:ArmAdvanced
            }))
        }
        if(props.id === 14){
            dispatch(SetExerciseIcons({
                image:'/Images/legs.png'
            }))
            dispatch(SetTotalTime(53))
            dispatch(setExerciseGifs({
                exercise:LegAdvanced
            }))
        }
        if(props.id === 15){
            dispatch(SetExerciseIcons({
                image:'/Images/shoulderandback.png'
            }))
            dispatch(SetTotalTime(19))
            dispatch(setExerciseGifs({
                exercise:ShoulderAdvanced
            }))
        }
    }
  return (
    <Container onClick={SetWorkoutdetails}>
        <img src={props.imagebackground}/>
       <Contents>
         <h3>{props.Exercise}</h3>
         <small>Last time:Jan 07</small>
         <div className='difficulty_level'>
            {[...Array(3)].map((strike,i)=>{
                let diff_level = i+1;
                return(
                    <label key={i}>
                          <FontAwesomeIcon 
                          className='icon'
                          icon={faBoltLightning}
                           style={{color:diff_level<=props.difficulty_level?' rgb(30, 102, 197)':'grey'}}
                          />
                    </label>
                )
            })}
         </div>
       </Contents>
    </Container>
  )
}

export default WorkoutButtons

let Container=styled.div`
 border-radius:10px;
 cursor:pointer;
 position:relative;
 margin-bottom:3%;
 overflow:hidden;
 background:#fff;
 h3{
     color:#fff;
 }
 small{
     color:grey;
 }
 img{
     width:100%;
     height:25vh;
     object-fit:cover;
     border-radius:8px;
 }
`
let Contents = styled.div`
bottom:70px;
 left:20px;
 position:absolute;
 .difficulty_level{
     display:flex;
     justify-content:left;
     align-items:center;
     .icon{
         margin:0 2px;
     }
 }
`