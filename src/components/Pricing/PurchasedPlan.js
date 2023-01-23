import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Plans from './Plans';

const PurchasedPlan = () => {
    let{ userDetails,DetailsName,StorePricingPlan,PurchaseDetails}=useSelector((state)=>state.gymRegucer);
   // console.log(StorePricingPlan.Plan,PurchaseDetails.Price,PurchaseDetails.Period)
 
    const[plans,setplans] = React.useState([]);
    let[userTrainer,setUserTrainer]=React.useState([])
    useEffect(()=>{
        const FetchUserAccount = async()=>{
            await fetch('http://localhost:8080/newTrainer')
            .then((res)=>res.json())
            .then((data)=>{
                let TrainerInfo = data.message.map((item)=>{
                    return(
                        {
                            email:item.Email,
                        }
                    )
                })
                setUserTrainer(TrainerInfo)
            })
            .catch((err)=>{
                console.log(err)
            })
        }
        return ()=>FetchUserAccount();
    })
    let[userMember,setUserMember]=React.useState([])
    useEffect(()=>{
        const FetchUserAccount = async()=>{
            await fetch('http://localhost:8080/newMember')
            .then((res)=>res.json())
            .then((data)=>{
                let userProfile = data.message.map((item)=>{
                    return(
                        {
                            email:item.Email
                        }
                    )
                })
                setUserMember(userProfile)
            })
            .catch((err)=>{
                console.log(err)
            })
        }
        return ()=>FetchUserAccount();
    })


    useEffect(()=>{
       let FetchedPlans = async()=>{
        await fetch('http://localhost:8080/purchased_plan')
        .then((res)=>res.json())
        .then((data)=>{
          //  console.log(data);
            let fetchedInfo = data.message.map((item)=>{
                return(
                    {
                        planName:item.Plan,
                        date:item.DatePurchased,
                        time:item.TimePurchased
                    }
                )
            })
            setplans(fetchedInfo)
        })
        .catch((err)=>{
            console.log(err.message)
        })
       }
       return ()=> FetchedPlans();
    },[1])
    console.log(userTrainer)
  return (
    <Container>
        <h3>View Plans Purchased Here</h3>
       <div className='plans'>
        {userMember.map((item)=>{
            return(
                <>
                  {item.email === DetailsName.Email?plans.map((item,i)=>{
                        return(
                            <Plans
                                key={i}
                                Name={userDetails?.UserName?userDetails.UserName:DetailsName.UserName}
                                Plan={item.planName}
                                time={item.time}
                                date={item.date}
                            />
                        )
                    }):'You have bought no plans'}
                </>
            )
        })}
        {userTrainer.map((item)=>{
             return(
                <>
                  {item.email === DetailsName.Email?plans.map((item,i)=>{
                        return(
                            <Plans
                                key={i}
                                Name={userDetails?.UserName?userDetails.UserName:DetailsName.UserName}
                                Plan={item.planName}
                                time={item.time}
                                date={item.date}
                            />
                        )
                    }):'You have bought no plans'}
                </>
            )
        })} 
       {/* {plans.map((item,i)=>{
            return(
                <Plans
                    key={i}
                    Name={userDetails?.UserName?userDetails.UserName:DetailsName.UserName}
                    Plan={item.planName}
                    time={item.time}
                    date={item.date}
                />
            )
        })} */}
       </div>
    </Container>
  )
}

export default PurchasedPlan
let Container = styled.div`
 height:400px;
 flex-basis:45%;
 border-radius:10px;
 box-shadow:2px 2px 4px #333;
 padding:10px;
 h3{
    text-align:center;
 }
 .plans{
    height:350px;
    max-height:350px;
    overflow-y:scroll;
    ::-webkit-scrollbar{
        width:5px;
        border-radius:8px;
        background:#fff;
    }
    ::-webkit-scrollbar-track{
        width:5px;
        border-radius:8px;
        background:#fff;
    }
    ::-webkit-scrollbar-thumb{
        width:5px;
        border-radius:8px;
        background:#333;
    }
 }
`