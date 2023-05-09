import React, { useEffect } from 'react'
import styled from 'styled-components'

function LeftUsers() {
    let[User,setUser] =React.useState([])
    useEffect(()=>{
        fetch('http://localhost:8080/fetchUsers')
        .then((res)=>res.json())
        .then((data)=>{
           // console.log(data)
            setUser(data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])
    console.log(User)
  return (
    <Container>
        <h2>Users</h2>
        <div className='title'>
            <h4>Date Registered</h4>
            <h4>Name</h4>
            <h4>Email</h4>
            <h4>Total Purchase</h4>
        </div>
        {User.data?User.data.map((item,i)=>{
            return(
                <div className='user-row'>
                    <h4>{item.dateRegistered}</h4>
                    <h4>{item.username}</h4>
                    <h4>{item.email}</h4>
                    <h4>${112}</h4>
                    </div>
            )
        }):'No Users'}
    </Container>
  )
}

export default LeftUsers
let Container = styled.div`
padding:10px;
background-color:#fff;
border-radius:5px;
flex-basis:60%;
height:55vh;
max-height:55vh;
overflow-y:scroll;
box-shadow:3px 3px 5px #333;
::-webkit-scrollbar{
    width:5px;
    border-radius:8px;
    background-color:#fff;
}
::-webkit-scrollbar-thumb{
    width:5px;
    border-radius:8px;
    background-color:#333;
}
::-webkit-scrollbar-track{
    width:5px;
    border-radius:8px;
    background-color:#333;
}
.user-row{
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin:2% 0;
    h4{
        font-weight:300;
        flex:0.4;
    }
    padding:6px 6px;
}
 .title{
    display:flex;
    justify-content:space-between;
    align-items:center;
    h4{
        font-weight:600;
        flex:0.4;
        text-align:left;
    }
    margin:1% 0;
 }
`