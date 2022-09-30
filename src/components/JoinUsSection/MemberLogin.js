import React from 'react'
import styled from 'styled-components'

const MemberLogin = () => {
    const[Form,setForm] = React.useState({
        username:'',
        password:""
    })
    const HandleInput=(e)=>{
        setForm((prevForm)=>{
            return{
                ...prevForm,
                [e.target.name]:e.target.value
            }
        })
    }
  return (
    <Container>
        <form>
            <label>Username</label>
            <br/>
            <input
             type={'text'}
             placeholder='Enter your username'
             onChange={HandleInput}
             value={Form.username}
             name='username'
            />
            <br/>
            <label>Password</label>
            <br/>
            <input
             type={'password'}
             placeholder='Enter Password'
             onChange={HandleInput}
             value={Form.password}
             name='password'
            />
        </form>
    </Container>
  )
}

export default MemberLogin
let Container = styled.div`
width:90%;
height:max-content;
padding:10px 12px;
background:#fff;
 form{
    .input{
        width:500px;
        height:45px;
        border-radius:7px;
        margin:1% 0;
        padding:0 10px;
    }
 }
`