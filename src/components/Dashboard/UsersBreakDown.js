import React, { useEffect } from 'react'
import styled from 'styled-components'
import UserComponent from './UserComponent'

const UsersBreakDown = () => {
    let[Users,setUsers] = React.useState([])
    let[usersCount,setUsersCount]=React.useState(4)
    let totalPages = Math.ceil(Users.length/usersCount);
    let pages = [...Array(totalPages + 1).keys()].slice(1);

    const [currPage,setCurrPage]=React.useState(1);

    const indexOfLastElement = currPage * usersCount;
    const indexofFirstElement = indexOfLastElement - usersCount;

    const visibleUsers = Users.slice(indexofFirstElement,indexOfLastElement);


    const PrevPage = () =>{
      if(currPage > 1){
        setCurrPage((prevPage)=>prevPage - 1)
      }
      else{
        return;
      }
    }
    const nextPage = () =>{
      if(currPage <= pages.length){
        setCurrPage((prevPage)=>prevPage + 1)
      }
      else{
        return;
      }
    }
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
      {visibleUsers.map((user)=>{
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
      <div className="footer">
        <button disabled={currPage === 1?true:false} onClick={PrevPage}>Prev</button>
        {pages.map((page,i)=>{
        return <p onClick={()=>setCurrPage(page)} key={page}>{page}</p>
      })}
      <button 
      disabled={currPage === pages.length?true:false}
      onClick={nextPage}>Next</button>
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
    max-height:40vh;
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
  .footer{
    width:100%;
    height:30px;
    color:#fff;
    display:flex;
    justify-content:center;
    align-items:left;
    p{
      margin:0 2%;
      cursor:pointer;
      border:1px solid #fff;
      padding:3px 6px;
      border-radius:5px;
    }
  }
`