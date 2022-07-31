import React ,{useEffect}from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { SetProfile} from '../../redux/reducers/reducerSlice'

function TrainerQuiz() {
  let dispatch = useDispatch()
    let [Form,setForm] = React.useState({
       username:'',
       Age:null,
       State:'',
       location:'',
       description:'',
       hourlypay:null,
       phoneNumber:''
    })
    let[Options,setOptions] = React.useState({
      choice:'',
      level1:'Beginner',
      level2:'Intermediate',
      level3:'Advanced'
    })
    const HandleInput=(event)=>{
        setForm((prevForm)=>{
            return{
                ...prevForm,
                [event.target.name]:event.target.value
            }
        })
    }
    const HandleOption=(e)=>{
      setOptions((prevOptions)=>{
        return{
          ...prevOptions,
          [e.target.name]:e.target.value
        }
      })
    }
    const HandleForm=(e)=>{
      e.preventDefault()
      dispatch(SetProfile({
        UserName:Form.username,
        Years:Form.Age,
        City:Form.State,
        Location:Form.location,
        message:Form.description,
        HourlyPay:Form.hourlypay,
        LevelofExperience:Options.choice,
        Phone:Form.phoneNumber
      }))
    }
    let[Countries,setCountries] = React.useState([]);
    useEffect(()=>{
      let FetchCountries = async ()=>{
        await fetch('https://disease.sh/v3/covid-19/countries')
        .then((response)=>response.json())
        .then((data)=>{
          let CountryInfo = data.map((info)=>{
            return(
              {
                flagImage:info.countryInfo.flag,
                countryCode:info.countryInfo.iso3
              }
            )
          })
          setCountries(CountryInfo)
        })
      }
      FetchCountries()
      return ()=>{
        FetchCountries()
      }
    })
    let[CountryForm,setCountryForm]=React.useState({
      country:''
    })
    const HandleCountry=(e)=>{
       setCountryForm((prevForm)=>{
        return{
          ...prevForm,
          [e.target.name]:e.target.value
        }
       })
    }
    console.log(Countries)
  return (
    <Container>
         <form onSubmit={HandleForm}>
        <h3>Fill in Your Information as a Trainer</h3>
        <label>Your Name</label>
        <span>*</span>
        <br/>
       <input
          type={'text'}
          placeholder='Your Username'
          name='username'
          value={Form.username}
          onChange={HandleInput}
          className='input'
         />
         <br/>
          <label>Your Age</label>
          <span>*</span>
          <br/>
         <input
          type={'number'}
          placeholder='Your Age'
          name='Age'
          value={Form.Age}
          onChange={HandleInput}
          className='input'
         />
         <br/>
          <label>Your Training Level of Experience</label>
          <span>*</span>
          <br/>
          <select name='choice'onChange={HandleOption} className='select'>
            <option>[...Training Level]</option>
            <option value={Options.level1}>Beginner</option>
            <option value={Options.level2}>Intermediate</option>
            <option value={Options.level3}>Advanced</option>
          </select>
         <br/>
         <label>city/State</label>
         <span>*</span>
          <br/>
         <input
          type={'text'}
          placeholder='State/Province'
          name='State'
          value={Form.State}
          onChange={HandleInput}
          className='input'
         />
         <br/>
          <label>Location/Address</label>
          <span>*</span>
          <br/>
         <input
          type={'text'}
          placeholder='Location'
          name='location'
          value={Form.location}
          onChange={HandleInput}
          className='input'
         />
         <br/>
          <label>Give us a brief Description of Yourself</label>
          <span>*</span>
          <br/>
         <textarea
          type={'text'}
          placeholder='Description of Yourself'
          name='description'
          value={Form.description}
          onChange={HandleInput}
          className='input'
         />
         <br/>
          <label>What would you propose as your hourly pay(in $)</label>
          <span>*</span>
          <br/>
         <input
          type={'number'}
          placeholder='Proposed Hourly Pay'
          name='hourlypay'
          value={Form.hourlypay}
          onChange={HandleInput}
          className='input'
         />
         <br/>
         <label>Your Phone Number</label>
         <span>*</span>
         <br/>
          <div className='Phone__number'>
            {/* {Countries.map((image)=>{
              return(
                <img src={image.flagImage}/>
              )
            })} */}
            <select name='image' onChange={HandleCountry}>
            {Countries.map((country)=>{
                return(
                  <>
                   <option value={country.flagImage}>{country.flagImage}</option>
                  </>
                )
               })}
            </select>
            <select name='country' onChange={HandleCountry}>
               {Countries.map((country)=>{
                return(
                  <>
                   <option value={country.countryCode}>{country.countryCode}</option>
                  </>
                )
               })}
            </select>
              <input
              type={'tel'}
              placeholder='+254 123-456-789-0'
              value={Form.phoneNumber}
              name='phoneNumber'
              pattern='[{123}-{456}-{789}-{0}]'
              onChange={HandleInput}
              className='inputs'
            />
          </div>
         <br/>
         <button>Submit</button>
         </form>
    </Container>
  )
}

export default TrainerQuiz
let Container = styled.div`
.Phone__number{
  display:flex;
  justify-content:space-between;
  align-items:center;
  height:45px;
  width:80%;
  select{
    width:52px;
    height:50px;
    background-color:#f4f4f4;
    option{
      padding:8px;
      height:40px;
      width:30px;
    }
    ::-webkit-scrollbar{
      display:none;
    }
  }
  .inputs{
    flex-basis:85%;
    height:45px;
    border-radius:7px;
    margin:1% 0;
    padding:0 10px;
  }
  .code__section{
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:100%;
    option{
      width:100%;
      height:30px;
      padding:5px;
    }
  }
}
span{
  color:red;
}
.select{
  width:525px;
  height:50px;
  border-radius:7px;
  option{
    padding:10px 12px;
  }
}
.input{
  width:500px;
  height:45px;
  border-radius:7px;
  margin:1% 0;
  padding:0 10px;
}
textarea{
  width:500px;
  border-radius:7px;
  resize:none;
  padding:10px 10px;
}
.radios{
  margin:1% 0;
}
button{
  
}
`