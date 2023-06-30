import React, { useEffect } from 'react'
import styled from 'styled-components'
import CustomerComponent from './CustomerComponent'

const Customers = () => {
  let[Users,setUsers]=React.useState([])

  useEffect(()=>{
    fetch('http://localhost:8080/fetchUsers')
    .then((res)=>res.json())
    .then((data)=>{
      let userdata = data.data.map((user)=>{
        return{
          username:user.username,
          email:user.email,
          usertype:user.userType,
          phonenumber:user.phoneNumber,
          country:user.Country,
          occupation:user.Occupation,
          id:user._id
        }
      })
      setUsers(userdata)
    })
  },[])
 // console.log(Users)
  return (
    <Container>
            <div className='left__top'>
              <h1>CUSTOMERS</h1>
              <p>List of Customers</p>
              </div>
              <div className='customer_section'>
                <div className='top_section'>
                  <div>ID</div>
                  <div>Name</div>
                  <div>Email</div>
                  <div>Phone Number</div>
                  <div>Country</div>
                  <div>Occupation</div>
                  <div>Role</div>
                </div>
              </div>
              <div className='customer_list'>
                   {Users.map((user,i)=>{
                    return(
                      <CustomerComponent
                       key={user.id}
                       id={user.id}
                       username={user.username}
                       country={user.country}
                       email={user.email}
                       role={user.usertype}
                       phonenumber={user.phonenumber}
                       occupation={user.occupation}
                      />
                    )
                   })}
              </div>
    </Container>
  )
}

export default Customers

let Container = styled.div`
.left__top{
  text-align:left;
  color:#fff;
  margin:20px 0;
  p{
    color:gray;
    font-size:13px;
  }
}
.customer_section{
  flex-basis:83%;
  .top_section{
    padding:15px 7px;
    border-radius:5px 5px 0 0;
    display:flex;
    justify-content:space-between;
    align-items:center;
    background-color:#3e2d71bd;
    div{
      flex-basis:20%;
      color:#fff;
      font-size:16px;
      font-weight:300;
    }
  }
}
.customer_list{
  height:90vh;
  max-height:90vh;
  overflow-y:scroll;
}
`