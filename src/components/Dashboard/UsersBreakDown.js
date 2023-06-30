import React, { useEffect } from 'react'
import styled from 'styled-components'
import UserComponent from './UserComponent'

const UsersBreakDown = () => {
    let[Users,setUsers] = React.useState([])

    useEffect(()=>{
       fetch('http://localhost:8080/fetchUsers')
       .then((res)=>res.json())
       .then((data)=>{
         let usersdata =  data.data.map((user)=>{
            return {
                id:user._id,
                time:user.timeRegistered,
                date:user.dateRegistered,
                username:user.username,
            }
         })
         setUsers(usersdata)
       })
    },[Users])
  return (
    <Container>
      <div className="top_bar">
         <div>ID</div>
         <div>User ID</div>
         <div>Created At</div>
         <div>User</div>
         <div>Cost</div>
      </div>
      <div className='users'>
      {Users.map((user)=>{
        return(
          <UserComponent
            id={user.id}
            time={user.time}
            date={user.date}
            username={user.username}
            cost={3934.22}
          />
        )
      })}
      </div>
    </Container>
  )
}

export default UsersBreakDown

let Container = styled.div`
height:48vh;
  width:100%;
  background-color:#3e2d71bd;
  border-radius:5px;
  padding:5px;
  flex-basis:68%;
  color:#fff;
  .users{
    height:43vh;
    max-height:43vh;
    overflow-y:scroll;
    ::-webkit-scrollbar{
      width:3px;
      background-color:#333;
      border-radius:8px;
    }
    ::webkit-scrollbar-thumb{
      width:3px;
      background:gold;
      border-radius:8px;
    }
    ::webkit-scrollbar-track{
      width:3px;
      background-color:#333;
      border-radius:8px;
    }
  }
  .top_bar{
     display:flex;
     justify-content:space-between;
     align-items:center;
     div{
      flex-basis:20%;
      color:#fff;
      text-align:left;
     }
  }
`