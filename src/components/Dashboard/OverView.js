import React from 'react'
import styled from 'styled-components'
import OverviewSection from './OverviewSection'

const OverView = () => {
    let sales = [
        {sales:9000,month:'Jan'},
        {sales:20000,month:'Feb'},
        {sales:25000,month:'Mar'},
        {sales:40000,month:'Apr'},
        {sales:79000,month:'May'},
        {sales:60000,month:'Jun'},
        {sales:130000,month:'Jul'},
        {sales:180000,month:'Aug'},
        {sales:185000,month:'Sep'},
        {sales:175000,month:'Oct'},
        {sales:210000,month:'Nov'},
        {sales:150000,month:'Dec'},
    ]
    let units = [
        {units:25000,month:'January'},
        {units:70000,month:'February'},
        {units:75000,month:'March'},
        {units:90000,month:'April'},
        {units:94500,month:'May'},
        {units:105000,month:'June'},
        {units:130000,month:'July'},
        {units:170000,month:'August'},
        {units:250000,month:'September'},
        {units:210000,month:'October'},
        {units:203000,month:'November'},
        {units:253000,month:'December'},
    ]
    const [selectedChoice,setSelectedChoice]=React.useState(units)
    let[Form,setForm]=React.useState({
        choice:'',
        first:'units',
        second:'sales'
    })
    const HandleChoice=(e)=>{
        setForm((prevForm)=>{
            return{
                ...prevForm,
                [e.target.name]:e.target.value
            }
        })
        Form.choice === "units"?setSelectedChoice(units):setSelectedChoice(sales)
    }
    //console.log(selectedChoice)
  return (
    <Container>
            <div className='left__top'>
              <h1>CUSTOMERS</h1>
              <p>List of Customers</p>
              </div>
              <select onChange={HandleChoice} name='choice'>
                <option value={Form.first} selected={true}>Units</option>
                <option value={Form.second}>Sales</option>
              </select>
              <div className='chart'>
                 <OverviewSection selectedData={selectedChoice} Choice={Form.choice}/>
              </div>
    </Container>
  )
}

export default OverView
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
  select{
    background:transparent;
    border-radius:6px;
    width:60px;
    height:50px;
    border:1px solid #fff;
    outline:none;
    color:#fff;
    option{
        color:#000;
        background:transparent;
    }
  }
  .chart{
    padding:5px;
    margin-top:5px;
  }
` 