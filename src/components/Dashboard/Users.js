import React from 'react'
import styled from 'styled-components'
import DashboardColumns from './DashboardColumns'
import { faBars ,faGear,faHeart,faPerson,faMessage,faChartPie, faDatabase, faComputer, faCalendar, faListCheck, faB, faSearch, faAngleDown, faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import DashboardBox from './DashboardBox'
import LeftUsers from './LeftUsers'
import RightUsers from './RightUsers'

function AdminDashboard() {
  return (
    <Container>
      <div className='left_side'>
        <DashboardColumns
         icon={faBars}
         description={'Dashboard'}
        />
        <DashboardColumns
         icon={faCalendar}
         description={'Product'}
        />
        <DashboardColumns
         icon={faListCheck}
         description={'Order List'}
        />
        <DashboardColumns
          icon={faChartPie}
          description={'Analytics'}
        />
        <DashboardColumns
          icon={faDatabase}
          description={'Stock'}
        />
        <DashboardColumns
          icon={faComputer}
          description={'Total Order'}
        />
        <DashboardColumns
          icon={faPerson}
          description={'Team'}
        />
        <DashboardColumns
          icon={faMessage}
          description={'Messages'}
        />
        <DashboardColumns
          icon={faHeart}
          description={'Favourites'}
        />
        <DashboardColumns
        icon={faGear}
        description={'Settings'}
      />
      </div>
      <div className='right__side'>
          <div className='top__bar'>
             <div className='left'>
             <FontAwesomeIcon icon={faBars}/>
             <h4>Dashboard</h4>
             </div>
             <div className='center'>
                 <input
                  type='text'
                  placeholder='Search...'
                 />
             </div>
             <div className='right'>
                  <img src='/Images/avatar2.png'/>
                  <p>Admin</p>
                  <FontAwesomeIcon icon={faAngleDown}/>
             </div>
          </div>
          <Row>
            <DashboardBox
             desc={'Total Order'}
             price={11456}
             iconshop={faShoppingCart}
             bool={true}
            />
             <DashboardBox
             desc={'Total Order'}
             price={40878}
             iconshop={faShoppingCart}
             bool={true}
            />
             <DashboardBox
             desc={'Total Order'}
             price={38878}
             iconshop={faShoppingCart}
             bool={true}
            />
             <DashboardBox
             desc={'Total Order'}
             price={12878}
             iconshop={faShoppingCart}
             bool={false}
            />
          </Row>
          <Row2>
             <LeftUsers/>
             <RightUsers/>
          </Row2>
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
 background:#fff;
 max-height:110vh;
 overflow-y:scroll;
 ::-webkit-scrollbar{
  width:0;
 }
 .left_side{
    flex-basis:20%;
    background-color:#0c1a69;
    height:100vh;
    margin-top:70px;
 }
 .right__side{
    flex-basis:80%;
    background-color:#f4f4f4;
    margin-top:80px;
    height:94vh;
    padding:15px;
    .top__bar{
      display:flex;
      justify-content:space-between;
      align-items:center;
      background-color:#fff;
      padding:10px 15px;
      border-radius:6px;
      .left{
        display:flex;
        justify-content:space-between;
        align-items:center;
        h4{
          margin-left:5px;
          font-size:18px;
          font-weight:400px;
        }
      }
      .center{
        display:flex;
        justify-content:space-between;
        align-items:center;
        width:600px;
        border:1px solid #000;
        outline:none;
        border-radius:5px;
        height:35px;
        background-color:#f4f4f4;
        .icon{
          background-color:blue;
          color:#fff;
          font-size:10px;
          padding:5px;
          width:25px;
          height:25px;
          cursor:pointer;
        }
        input{
           background:transparent;
           outline:none;
           border:none;
           padding:0 10px;
           width:100%;
        }
      }
      .right{
        flex-basis:13%;
        display:flex;
        justify-content:space-between;
        align-items:center;
        background-color:#f4f4f4;
        border-radius:4px;
        padding:4px;
        height:30px;
        img{
          height:20px;
          width:20px;
        }
      }
    }
 }
`
let Row = styled.div`
 display:flex;
 justify-content:space-between;
 align-items:center;
 margin-top:15px;
`
let Row2 = styled.div`
 display:flex;
 justify-content:space-between;
 margin-top:15px;
`