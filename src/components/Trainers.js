import React from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'
import Trainer from './Trainer'

function Trainers() {
  const[trainer,setTrainer]=React.useState([])
    useEffect(()=>{
        let trainerInfo = async()=>{
            await fetch('http://localhost:8080/newTrainer')
            .then((res)=>res.json())
            .then((data)=>{
                //console.log(data)
                let TrainerInfo = data.message.map((item)=>{
                    return(
                        {
                            age:item.Age,
                            city:item.City,
                            experience:item.Experience,
                            flag:item.Flag,
                            hourlypay:item.HourPay,
                            levelofexperience:item.LevelofExperience,
                            location:item.Location,
                            message:item.Message,
                            phone:item.Phone,
                            username:item.Username
                        }
                    )
                })
                setTrainer(TrainerInfo)
            })
        }
        return ()=>{
            trainerInfo()
        }
    },[1])
    console.log(trainer)
  return (
    <Container>
        <h2>Expert-Trainers</h2>
        <Row>
            <Trainer
             image='/Images/trainer-1.jpg'
             level='Intermediate '
             name='Michael Atkinson'
             rating={2}
            />
            <Trainer
             image='/Images/trainer-2.jpg'
             level='Expert '
             name='Cameron Diaz'
             rating={5}
            />
            <Trainer
             image='/Images/trainer-3.jpg'
             level='Beginner'
             name='Doyle Marcus'
             rating={4}
            />
            <Trainer
             image='/Images/trainer-4.jpg'
             level='Advanced'
             name='Martha Dwayne'
             rating={3}
            />
          {trainer.length>0?  <div>
            {trainer?.map((data)=>{
              return(
                <Trainer
                 level={data.levelofexperience}
                 name = {data.username}
                 rating = {1}
                />
              )
            })}
            </div>:''}
        </Row>
    </Container>
  )
}

export default Trainers
let Container = styled.div`
padding:50px;
h2{
    color:#f44336;
    text-align:center;
    display:flex;
    align-items:center;
    ::after{
        content:'';
        width:100%;
        height:2px;
        background-color:gray;
        display:block;
    }
    ::before{
     content:'';
     width:100%;
     height:2px;
     background-color:gray;
     display:block;
 }
}
`
let Row = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
position:relative;
width:100%;
max-width:100%;
overflow-x:scroll;
@media(max-width:600px){
  flex-direction:column;
}
`