import React, { useEffect } from 'react'
import styled from 'styled-components'
import SportsComponent from './SportsComponent'

const RightNewsSection = () => {
  let[SportsNews,setSportsNews]=React.useState([])
  //https://newsapi.org/v2/everything?q=fitness&apiKey=dc2d56d3ed754a1295c8d6fc4f1a6125
  useEffect(()=>{
       let FetchNews=async()=>{
            await fetch('https://newsapi.org/v2/everything?q=workouts&apiKey=dc2d56d3ed754a1295c8d6fc4f1a6125')
            .then((response)=>response.json())
            .then((data)=>{
              //console.log(data)
              let Information = data.articles.map((item)=>{
                return(
                  {
                    Author:item.author,
                    Description:item.description,
                    timePublished:item.publishedAt,
                    Publisher:item.source.name,
                    Title:item.title,
                    Image:item.urlToImage,
                    PostLink:item.url,
                    Id:item.source.id
                  }
                )
              })
              setSportsNews(Information);
            })
            .catch((err)=>{
              console.log(err.message);
            })
       }
       FetchNews()
       return ()=>{
         FetchNews()
       }
  },[])
  //console.log(SportsNews)
  return (
    <Container>
    <h1>Get Latest News on what's Happening in Fitness And Sports</h1>
       <div className='news_area'>
        {SportsNews.length === 0?<img src='/WorkoutGifs/preloader.gif' className='preloader'/>:''}
        {SportsNews.map((news)=>{
          return(
              <SportsComponent
                image= {news.Image}
                linktoPost={news.PostLink}
                author={news.Author}
                description={news.Description}
                publisher={news.Publisher}
                time={news.timePublished}
                title={news.Title}
              />
          )
        })}
       </div>
    </Container>
  )
}

export default RightNewsSection

let Container = styled.div`
flex-basis:25%;
 margin:4% 0.5%;
 h1{
   font-size:30px;
   font-weight:300;
 }
 .news_area{
   max-height:79vh;
   height:79vh;
   overflow-y:scroll;
   ::-webkit-scrollbar{
     display:none;
   }
   .preloader{
     width:50%;
     top:30%;
     left:100px;
     position:relative;
     obect-fit:cover;
   }
 }
`