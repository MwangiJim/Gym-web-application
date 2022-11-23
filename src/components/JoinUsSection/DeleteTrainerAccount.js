import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'
import TrainersViews from './TrainersViews'

const DeleteTrainerAccount = ({bookedSessions,Trainerprofile}) => {
    const[DeleteComponent,setDeleteComponent]=React.useState(false);
    const[trainerviews,setTrainerViews]=React.useState(false);
    function RevertProcess(){
      setDeleteComponent((prevState)=>!prevState)
    }
    let styles = {
        display:DeleteComponent?'none':''
    }
   async function DeleteAccount(){
    Trainerprofile.map((item)=>{
        return(
            fetch(`http://localhost:8080/deleteTrainerProfile/${item.Trainer_id}`,{method:'DELETE'})
            .then((e)=>{
                alert('Trainer Account successfully deleted!',e)
            })
            .catch((err)=>{
                alert('Error'+err+'occured when deleting Trainer Account with id:',item.Trainer_id)
            })
        )
      })
        bookedSessions.map((data)=>{
            return(
                fetch(`http://localhost:8080/bookings/${data.booking_Id}`,{method:'DELETE'})
                .then((e)=>{
                    alert('Booking successfully deleted!',e)
                })
                .catch((err)=>{
                    alert('Error'+err+'occured when deleting Booking id:',data.booking_Id)
                })
            )
        })
        setTrainerViews(true);
        setDeleteComponent((prevState)=>!prevState)
    }
  return (
    <Container style={styles}>
        {trainerviews?<TrainersViews/>:''}
         <div className='delete__component'>
              <h3>Are you sure you want to delete Account?</h3>
               <div className='line'>
               <FontAwesomeIcon icon={faTriangleExclamation}/>
              <p>*This action once done cannot be reverted*</p>
               </div>
              <div className='buttons'>
                <button onClick={RevertProcess}>Cancel</button>
                <button className='red' onClick={DeleteAccount}>Delete Account</button>
              </div>
         </div>
    </Container>
  )
}

export default DeleteTrainerAccount

let Container = styled.div`
 width:100%;
 height:100vh;
 top:0;
 left:0;
 position:fixed;
 background:linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7));
 z-index:4;
 .delete__component{
    width:500px;
    height:200px;
    background:#fff;
    border-radius:8px;
    padding:8px;
    top:30%;
    left:30%;
    position:relative;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    .line{
        display:flex;
        justify-content:center;
        align-items:center;
        color:#f44336;
        margin:4% 0;
    }
    .buttons{
        button{
            padding:12px 45px;
            cursor:pointer;
            border-radius:8px;
            background:#fff;
            outline:none;
            border:none;
            box-shadow:3px 3px 6px #333;
            color:#000;
            margin:0 2px;
        }
        .red{
            background:#f44336;
            color:#fff;
        }
    }
 }
`