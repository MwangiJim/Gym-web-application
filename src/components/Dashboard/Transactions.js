import React, { useEffect } from 'react'
import styled from 'styled-components'
import TransactionsComponent from './TransactionsComponent'

const Transactions = () => {
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
            id:user._id,
            time:user.timeRegistered,
            date:user.dateRegistered
          }
        })
        setUsers(userdata)
      })
    },[])
  return (
    <Container>
        <div className='left__top'>
              <h1>TRANSACTIONS</h1>
              <p>Entire List of Transactions</p>
         </div>
         <div className='top_list'>
            <div>ID</div>
            <div>User ID</div>
            <div>CreatedAt</div>
            <div># of Products</div>
            <div>Cost</div>
         </div>
         <div className='transaction_list'>
            {Users.map((user,i)=>{
                return(
                    <TransactionsComponent
                     id={user.id}
                     time={user.time}
                     date={user.date}
                     products={4}
                     cost={13000}
                    />
                )
            })}
         </div>
    </Container>
  )
}

export default Transactions

let Container = styled.div`
 flex-basis:83%;
 .left__top{
    text-align:left;
    color:#fff;
    margin:20px 0;
    p{
      color:gray;
      font-size:13px;
    }
  }
  .top_list{
    display:flex;
    justify-content:space-between;
    align-items:center;
    border-radius:5px 5px 0px 0px;
    div{
        flex-basis:20%;
        font-size:15px;
        font-weight:300;
        padding:15px 7px;
        background-color:#3e2d71bd;
        color:#fff;
    }
  }
  .transaction_list{
    height:90vh;
    max-height:90vh;
    overflow-y:scroll;
  }
`