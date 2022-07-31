import { faBars, faBell, faClockFour, faLocation, faShoppingCart, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getAuth } from 'firebase/auth'
import React ,{useEffect}from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { SetShowBookings } from '../redux/reducers/reducerSlice'
import BookingDisplay from './BookingDisplay'
import GoogleMap from './GoogleMap'

function Header() {
    let navigate = useNavigate()
    let{userDetails,DetailsName,EcommerceStore} = useSelector((state)=>state.gymRegucer)
    let auth = getAuth()
   // console.log(userDetails)
    const MoveToCheckOut=()=>{
        navigate(`/checkout`)
    }
    const ShowShopping=()=>{
        navigate(`/shopping`)
    }
    const ShowHome=()=>{
        navigate(`/`)
    }
    let[Profile,setProfile]=React.useState(false);
    const ShowProfile=()=>{
          setProfile((prevState)=>!prevState)
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
    // let[Weather,setWeather]=React.useState({})
    //https://openweathermap.org/img/wn/"+icon+".png
//     useEffect(()=>{
//      let WeatherDetails = async()=>{
//         await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${localStorage.getItem('address')}&units=metric&appid=c7686ab0dff66d8e68735a9f78856cd1`)
//         .then((response)=>response.json())
//         .then((data)=>{
//            //console.log(data)
//             let weatherInfo = {
//                 Condition:data.weather[0].main ,
//                 WeatherIcon:data.weather[0].icon,
//                 Temperature:data.main.temp,
//             }  
//             setWeather(weatherInfo)
//         })
//       }
//       WeatherDetails()
//       return ()=> WeatherDetails()
//     })
//   // console.log(localStorage.getItem('address'))
//console.log(DetailsName)
  return (
    <Container>
          <h2 className='h2'>BE<strong>FIT</strong></h2>
      <div className='center' style={styles}>
          <li onClick={ShowHome}>Home</li>
          <li onClick={()=>navigate(`/virtualworkout`)}>Virtual Workout</li>
          <li onClick={ShowShopping}>Shop</li>
          <li onClick={()=>navigate('/joinus')}>Join Us</li>
          <li onClick={MoveToCheckOut}><FontAwesomeIcon icon={faShoppingCart} className='shopping'/><span>{EcommerceStore.length}</span></li>
          <div className='profile_image' onClick={ShowProfile}>
            {userDetails.PhotoImage? 
           <img src={userDetails.PhotoImage} className='img'/>:
           <p>{DetailsName?.UserName.charAt(0)}{DetailsName?.UserName.charAt(1)}</p>}
          </div>
          <small>Hello<br/>{userDetails.Email?userDetails.Email:DetailsName.UserName}</small>
        {/* //   <p></p>}  */}
          <button onClick={()=>auth.signOut()}>LOGOUT</button>
          <div className='location'>
                <FontAwesomeIcon icon={faLocation} className='icon' onClick={ShowGoogleMaps}/>
                <small>{localStorage.getItem('address')},Kenya</small>
            </div>
      </div>
      <FontAwesomeIcon icon={Menu?faTimes:faBars} className='menu' onClick={ShowMenu}/>
      {Profile?<BookingDisplay/>:''}
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
 padding:15px 0;
 top:0;
 left:0;
 position:fixed;
 z-index:30;
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
    .menu{
        display:block;
        top:10px;
        right:10px;
        position:absolute;
        z-index:9;
        cursor:pointer;
    }
    .center{
        background-color:#000;
        width:350px;
        height:70vh;
        z-index:8;
        top:0;
        right:0px;
        position:absolute;
        display:flex;
        justify-content:space-between;
        flex-direction:column;
        align-items:center;
        li{
            display:block;
            margin-bottom:-20px;
            padding:-35px 0;
        }
    }
 }
 .center{
     text-align:left;
     align-items:center;
     display:flex;
     margin-right:5%;
     color:#f44336;
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
         background:transparent;
         outline:none;
         border:none;
         padding:12px 35px;
         cursor:pointer;
         color:#fff;
     }
     small{
         color:#fff;
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