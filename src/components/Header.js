import { faBars, faBell, faClockFour, faHome, faLocation, faLock, faShop, faShoppingCart, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React ,{useContext, useEffect}from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import GoogleMap from './GoogleMap'
import { userDetailsContext } from '../App'

function Header(props) {
    let navigate = useNavigate()
    let{EcommerceStore,DetailsName} = useSelector((state)=>state.gymRegucer)
    console.log(DetailsName)
    const MoveToCheckOut=()=>{
        navigate(`/checkout`)
    }
    const ShowShopping=()=>{
        navigate(`/shopping`)
    }
    const ShowHome=()=>{
        navigate(`/`)
    }
    let[Menu,setMenu]=React.useState(false);
    const ShowMenu=()=>{
       setMenu((prevMenu)=>!prevMenu)
    }
    let styles = {
        right:Menu?'-50px':'-400px'
    }
    let[Googlemaps,setGoogleMaps]=React.useState(false)
    const ShowGoogleMaps=()=>{
       setGoogleMaps((prevForm)=>!prevForm)
    }
    let name = 'Guest'
     function Logout(){
        window.localStorage.clear();
        window.localStorage.setItem("isLoggedIn",false);
        window.location.assign('/accountsetup');
     }
     let userDetails = useContext(userDetailsContext);
     
  return (
    <Container>
          <h2 className='h2'>BE<strong>FIT</strong></h2>
      <div className='center'>
          <li onClick={ShowHome}><FontAwesomeIcon icon={faHome}/><small>Home</small></li>
          <li onClick={()=>navigate(`/virtualworkout`)}><small>Virtual Workout</small></li>
          <li onClick={ShowShopping}><FontAwesomeIcon icon={faShop}/><small>Shop</small></li>
          <li onClick={()=>navigate('/joinus')}><FontAwesomeIcon icon={faLock}/><small>Account</small></li>
          <li onClick={MoveToCheckOut}><FontAwesomeIcon icon={faShoppingCart} className='shopping'/><span>{EcommerceStore.length}</span></li>
          <div className='profile_image'>
            <p>{userDetails?.data.username?userDetails.data.username.charAt(0):'G'}</p>
          </div>
          <small>Hello<br/>{userDetails?.data.username?userDetails.data.username:'Guest'}</small>
        {/* //   <p></p>}  */}
          <button onClick={Logout}>LOGOUT</button>
          <div className='location'>
                <FontAwesomeIcon icon={faLocation} className='icon' onClick={ShowGoogleMaps}/>
                <small>{localStorage.getItem('address')}</small>
            </div>
           {props.type === 'Admin'? <div className='admin' onClick={()=>navigate('/admindashboard')}>
                <h3>A</h3>
                <h6>Admin</h6>
            </div>:''}
      </div>
      <FontAwesomeIcon icon={Menu?faTimes:faBars} className='menu' onClick={ShowMenu}/>
      {Googlemaps?<GoogleMap/>:''}
    </Container>
  )
}

export default Header
let Container = styled.div`
 display:flex;
 justify-content:space-between;
 align-items:center;
 background-color:#000;
 padding:10px 0;
 top:0;
 left:0;
 position:fixed;
 z-index:10;
 width:100%;
 .menu{
    color:#fff;
    margin-right:0%;
    font-size:28px;
    display:none;
 }
 p{
    color:#fff;
    background-color:#f44336;
    height:25px;
    width:32px;
    border-radius:10px;
    text-align:center;
    padding:6px;
    font-size:20px;
    text-transform:uppercase
 }
 .img{
     width:35px;
     height:35px;
     object-fit:cover;
     border-radius:50%;
     border:2px solid #f44336;
 }
 .h2{
     color:#f44336;
     strong{
         color:#fff;
     }
     margin:0 7%;
 }
 @media(max-width:600px){
    .center{
        background-color:#000;
        width:100%;
        height:20vh;
        z-index:8;
        top:60%;
        left:0px;
        position:fixed;
        display:flex;
        justify-content:space-between;
        align-items:center;
        box-shadow:3px 3px 6px #fff;
        li{
            display:flex;
            justify-content:center;
            align-items:center;
            margin-bottom:-20px;
            padding:-35px 0;
            color:#000;
            font-size:17px;
            small{
                display:none;
            }
        }
    }
 }
 .center{
     text-align:left;
     align-items:center;
     display:flex;
     margin-right:5%;
     color:#f44336;
     .admin{
        background-color:gray;
        height:50px;
        width:50px;
        border-radius:50%;
        cursor:pointer;
        border:2px solid #fff;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        h3{
            color:#fff;
        }
        h6{
            color:#fff;
            font-size:9px;
            font-weight:200;
        }
     }
     .profile_image{
        cursor:pointer;
     }
     .location{
        display:block;
        width:80px;
        text-align:center;
        .icon{
            cursor:pointer;
        }
    }
     .bell{
        color:#fff;
        cursor:pointer;
     }
     button{
         background:#ffc017;
         outline:none;
         border:2px solid #fff;
         padding:7px 20px;
         cursor:pointer;
         color:#000;
         border-radius:6px;
     }
     small{
         color:#fff;
         font-size:15px;
         margin-left:3px;
     }
     li{
        display:inline-block;
        position:relative;
        padding:8px 12px;
        list-style:none;
        color:#fff;
        cursor:pointer;
        ::after{
            content:'';
            width:0;
            height:2px;
            background-color:#fff;
            margin:auto;
            display:block;
            cursor:pointer;
            transition:0.5s;
        }
        :hover::after{
            width:100%;
        }
        .shopping{
            color:#fff;
            cursor:pointer;
        }
        span{
            color:#fff;
            background-color:#f44336;
            padding:3px 5px;
            border-radius:50%;
            bottom:7px;
            right:5px;
            position:relative;
        }
    }
 }
 .weather_section{
    display:flex;
    justify-content:space-between;
    align-items:center;
    flex-direction:column;
    color:#fff;
    img{
        width:20%;
    }
    .conditions{
        display:flex;
        justify-content:center;
        align-items:center;
    }
    h2{
      font-weight:400;
    }
    small{
        h6{
            color:red;
            font-weight:300;
        }
    }
    .time{
        margin:0 2px;
    }
 }
`