import { faDownload, faEnvelope, faPersonCirclePlus, faSackDollar, faTrafficLight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'
import LineChart from './LineChart'
import UsersBreakDown from './UsersBreakDown'
import BarChartCategory from './BarChartCategory'
import DashboardComponent from './DashBoardComponent'


const DashboardLanding = () => {
  return (
    <Container>
           <div className='dashboard'>
              <div className='left__top'>
              <h1>DASHBOARD</h1>
              <p>Welcome to your dashboard</p>
              </div>
              <button disabled={true} style={{cursor:'not-allowed'}}>
                <FontAwesomeIcon icon={faDownload}/>
                DOWNLOAD REPORTS
              </button>
            </div>
            <DisplayRow>
              <LeftSide>
                <Row>
                  <DashboardComponent
                  Text={'Total Customers'}
                  icon={faEnvelope}
                  value={5251}
                  percent={14}
                  />
                  <DashboardComponent
                  Text={'Sales Today'}
                  icon={faSackDollar}
                  value={7916}
                  percent={21}
                  />
                </Row>
                <Row>
                <DashboardComponent
                Text={'Monthly Sales'}
                icon={faPersonCirclePlus}
                value={59525}
                percent={5}
                />
                <DashboardComponent
                Text={'Yearly Sales'}
                icon={faTrafficLight}
                value={65152}
                percent={43}
                />
                </Row>
              </LeftSide>
              <RightSide>
                  <LineChart/>
              </RightSide>
            </DisplayRow>
            <FooterRow>
               <UsersBreakDown/>
               <div className='bar-chart'>
                <h2>Sales By category</h2>
                <BarChartCategory/>
               </div>
            </FooterRow>
    </Container>
  )
}

export default DashboardLanding
let Container = styled.div`
 .landing_section{
    height:80vh;
    max-height:80vh;
    overflow-y:scroll;
    ::-webkit-scrollbar{
      width:0px;
    }
  }
  .dashboard{
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin:20px 0px;
    .left__top{
      text-align:left;
      color:#fff;
      p{
        color:gray;
        font-size:13px;
      }
    }
    button{
      display:flex;
      justify-content:center;
      align-items:center;
      color:#000;
      background-color:gold;
      outline:none;
      border:none;
      border-radius:5px;
      width:20%;
      height:40px;
    }
  }
`
let DisplayRow =  styled.div`
 display:flex;
 justify-content:space-between;
 
`
let LeftSide =styled.div`
 flex-basis:27%;
`
let Row = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
`
let RightSide = styled.div`
margin-left:0.5%;
 flex-basis:70%;
 border-radius:5px;
 background-color:#3e2d71bd;
 padding-bottom:10px;
`
let FooterRow = styled.div`
display:flex;
justify-content:space-between;
margin-top:10px;
.bar-chart{
  flex-basis:30%;
  color:#fff;
  border-radius:5px;
  padding:5px;
  margin-left:0.5%;
  background-color:#3e2d71bd;
  h2{
    font-weight:300;
    color:#fff;
    font-size:15px;
  }
}
`