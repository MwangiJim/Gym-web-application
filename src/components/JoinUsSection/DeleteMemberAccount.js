import React, { useContext } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import { UserInformation } from './Joinus'
import TrainersViews from './TrainersViews'

const DeleteMemberAccount = () => {
    let profileDetails = useContext(UserInformation);
    console.log(profileDetails);
    let[Delete,setDelete]=React.useState(false);

    function DeleteOperation(){
        setDelete((prevState)=>!prevState)
    }
    let styles = {
        display:Delete?'none':''
    }
    let[MemberViews,setMemberViews]=React.useState(false);
    const deleteMemberAccount= function(){
       profileDetails.map((item)=>{
        return(
            fetch(`http://localhost:8080/deleteMember/${item.member_Id}`,{method:'DELETE'})
            .then((e)=>{
                alert('Member was successfully deleted'+e)
            })
            .catch((err)=>{
                //alert('Error deleting Account'+err)
            })
        )
       })
       setMemberViews(true);
       setDelete((prevstate)=>!prevstate)
    }
  return (
    <Container style={styles}>
        {MemberViews?<TrainersViews/>:''}
        <div className='delete__component'>
           <h3>Are you sure you want to delete Account?</h3>
               <div className='line'>
               <FontAwesomeIcon icon={faTriangleExclamation}/>
              <p>*This action once done cannot be reverted*</p>
               </div>
              <div className='buttons'>
                <button onClick={DeleteOperation}>Cancel</button>
                <button className='red' onClick={deleteMemberAccount}>Delete Account</button>
              </div>
        </div>
    </Container>
  )
}

export default DeleteMemberAccount

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