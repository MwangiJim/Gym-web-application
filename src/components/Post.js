import React from 'react'
import styled from 'styled-components'
import moment from 'moment'

function Post(props) {
  return (
    <Container>
        <img src={props.image}/>
        <div className='banner'>
           <div className='line'>
                <p>By {props.Author?props.Author:'N/A'} | {moment(props.TimePublished).fromNow()}</p>
           </div>
           <h3>{props.Title}</h3>
           <h5>{props.Description}</h5>
           <small>Trending on #{props.Publisher}</small>
           <br/>
           <br/>
           <a href={props.link}>Read More</a>
        </div>
    </Container>
  )
}

export default Post
let Container = styled.div`
flex-basis:100%;
height:500px;
margin:0 1%;
  img{
    width:300px;
    height:200px;
    object-fit:cover;
  }
  background-color:#333;
  .banner{
      padding:20px 12px;
      .line{
          display:flex;
          justify-content:left;
          align-items:center;
          p{
              color:#f44336;
              font-size:16px;
              font-weight:300;
          }
      }
      h3{
          color:#fff;
          font-weight:400;
          font-size:19px;
      }
      h5{
          color:gray;
          margin:10px 0 10px;
      }
      small{
          color:gray;
          margin:10px 0 15px;
      }
      a{
          background-color:transparent;
          color:#fff;
          padding:10px 30px;
          border-radius:20px;
          text-decoration:none;
          font-size:15px;
          font-weight:500;
          border:2px solid #f44336;
      }
  }
`