import React from 'react'
import styled from 'styled-components'
import DashboardColumns from './DashboardColumns'
import { faBars ,faGear,faHeart,faPerson,faMessage,faChartPie, faDatabase, faComputer, faCalendar, faListCheck, faB, faSearch, faAngleDown, faShoppingCart, faHome, faPeopleGroup, faCalculator, faGlobeAfrica, faCalendarDay, faPieChart, faTemperatureArrowUp, faHand, faMoon, faLineChart, faDownload, faEnvelope, faSackDollar, faPersonCirclePlus, faTrafficLight, faDoorOpen, faAngleLeft, faPowerOff} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import DashboardLanding from './DashboardLanding'
import ProductsView from './ProductsView'
import Customers from './Customers'
import Transactions from './Transactions'
import OverView from './OverView'
import Daily from './Daily'
import Monthly from './Monthly'
import BreakDown from './BreakDown'
import Geography from './Geography'

function AdminDashboard() {
  let[dashboard,setdashboard]=React.useState(true)
  let[products,setproducts]=React.useState(false)
  let[customers,setcustomers]=React.useState(false)
  let[transactions,settransactions]=React.useState(false)
  let[overview,setoverview]=React.useState(false)
  let[daily,setdaily]=React.useState(false)
  let[monthly,setmonthly]=React.useState(false)
  let[breakdown,setbreakdown]=React.useState(false)
  
  return (
    <Container>
      <div className='left_side'>
        <h2>BEFITVISION</h2>
        <DashboardColumns
          Da_handler = {setdashboard}
          id={1}
         icon={faHome}
         description={'Dashboard'}
        />
        <h3 style={{margin:"20px 0",fontSize:"13px",fontWeight:"300",color:'#fff'}}>Client Facing</h3>
        <DashboardColumns
        P_handler = {setproducts}
          id={2}
         icon={faShoppingCart}
         description={'Products'}
        />
        <DashboardColumns
         C_handler = {setcustomers}
          id={3}
         icon={faPeopleGroup}
         description={'Customers'}
        />
        <DashboardColumns
        T_handler = {settransactions}
           id={4}
          icon={faCalculator}
          description={'Transactions'}
        />
        <DashboardColumns
           id={5}
          icon={faGlobeAfrica}
          description={'Geography'}
        />
        <h3 style={{margin:"20px 0",fontSize:"13px",fontWeight:"300",color:'#fff'}}>Sales</h3>
        <DashboardColumns
        O_handler = {setoverview}
           id={6}
          icon={faPerson}
          description={'Overview'}
        />
        <DashboardColumns
        D_handler = {setdaily}
           id={7}
          icon={faCalendarDay}
          description={'Daily'}
        />
        <DashboardColumns
        M_handler = {setmonthly}
           id={8}
          icon={faCalendar}
          description={'Monthly'}
        />
        <DashboardColumns
        Br_handler = {setbreakdown}
           id={9}
          icon={faPieChart}
          description={'Breakdown'}
        />
        <h3>Management</h3>
        <DashboardColumns
         id={10}
        icon={faLineChart}
        description={'Performance'}
         />
      <div className='profile_user'>
               <img src='/Images/pic-4.png'/>
                <div className="details">
                  <h5>Jimmy</h5>
                  <p>Trainer</p>
                </div>
                <FontAwesomeIcon
                 icon={faPowerOff} 
                 style={{cursor:'pointer'}} 
                 className='power' onClick={()=>window.location.assign('/')}/>
              </div>
      </div>
      <div className='right__side'>
          <div className='top_search'>
            <div className='leftside'>
              <FontAwesomeIcon icon={faBars}/>
              <div className='input'>
                <input
                 type='text'
                 placeholder='search'
                />
                <FontAwesomeIcon icon={faSearch}/>
              </div>
            </div>
            <div className='right-side'>
              <FontAwesomeIcon style={{margin:"0 8px"}}icon={faMoon}/>
              <FontAwesomeIcon style={{margin:"0 8px"}}icon={faGear}/>
              <div className='profile'>
               <img src='/Images/pic-4.png'/>
                <div className="details">
                  <h5>Jimmy</h5>
                  <p>Trainer</p>
                </div>
              </div>
              <FontAwesomeIcon icon={faAngleDown}/>
            </div>
          </div>
         <div className="landing_section">
          {/* <Geography/> */}
             <DashboardLanding/>
            {/* {products?<ProductsView/>:''} */}
            {/* {customers?<Customers/> :''} */}
           {/* {transactions? <Transactions/> :''}
           {overview? <OverView/> :''}
            {daily? <Daily/> :''} 
             {monthly?<Monthly/> :''}
              {breakdown? <BreakDown/> :''} */}
         </div>
      </div>
    </Container>
  )
}

export default AdminDashboard
let Container = styled.div`
 width:100%;
 height:110vh;
 display:flex;
 justify-content:space-between;
 background-color:#000;
 max-height:110vh;
 overflow-y:scroll;
 position:relative;
 z-index:20;
 ::-webkit-scrollbar{
  width:0;
 }
 .left_side{
    flex-basis:15%;
    background-color:#3e2d71bd;
    height:120vh;
    .back_home{
      color:#fff;
      display:flex;
      justify-content:center;
      align-items:center;
    }
    .profile_user{
      display:flex;
        justify-content:center;
        align-items:center;
        bottom:-40px;
        position:absolute;
        color:#fff;
        left:20px;
        .power{
          font-size:16px;
          transition:ease-in-out 0.5s;
          :hover{
            color:gold;
            font-size:20px;
          }
        }
        img{
          width:40px;
          height:40px;
          border-radius:50%;
        }
        .details{
          text-align:left;
          color:#fff;
          margin:0 5px;
          h5{
            font-weight:bold;
            font-size:18px;
          }
          p{
            font-weight:300;
            font-size:13px;
          }
        }
    }
    h2{
      text-align:center;
      font-size:26px;
      font-weight:400;
      color:#fff;
      margin:8% 0;
    }
    h3{
      margin-left:5%;
      color:#fff;
      font-size:14px;
      text-align:left;
      font-weight:300;
    }
 }
 .right__side{
  flex-basis:83%;
  margin-right:10px;
  .top_search{
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-top:10px;
    .leftside{
      display:flex;
      justify-content:center;
      align-items:center;
      color:#fff;
      flex-basis:30%;
      .input{
        background-color:#3e2d71bd;
        height:40px;
        width:350px;
        margin-left:2%;
        border-radius:8px;
        color:#fff;
        padding:0 10px;
        display:flex;
        justify-content:space-between;
        align-items:center;
        input{
        background:transparent;
        outline:none;
        border:none;
        width:350px;
        height:40px;
        color:#fff;
        }
      }
    }
    .right-side{
      display:flex;
      justify-content:space-between;
      align-items:center;
      color:#fff;
      margin-right:10px;
      .profile{
        display:flex;
        justify-content:center;
        align-items:center;
        img{
          width:40px;
          height:40px;
          border-radius:50%;
        }
        .details{
          text-align:left;
          color:#fff;
          margin:0 10px;
          h5{
            font-weight:bold;
          }
          p{
            font-weight:300;
            font-size:13px;
          }
        }
      }
    }
  }
 }
`