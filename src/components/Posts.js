import React from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'
import Post from './Post'

function Posts() {
    let[posts,setposts]=React.useState([])
    //https://newsapi.org/v2/everything?q=fitness&apiKey=dc2d56d3ed754a1295c8d6fc4f1a6125
    useEffect(()=>{
       let FetchFitnessNews =async()=>{
           await fetch('https://newsapi.org/v2/everything?q=bodybuilding&apiKey=dc2d56d3ed754a1295c8d6fc4f1a6125')
           .then((response)=>response.json())
           .then((data)=>{
               //console.log(data)
               let FitnessNews = data.articles.map((article)=>{
                   return(
                       {
                           Author:article.author,
                           Title:article.title,
                           Description:article.description,
                           image:article.urlToImage,
                           link:article.url,
                           Publisher:article.source.name,
                           TimePublished:article.publishedAt
                       }
                   )
               })
               setposts(FitnessNews)
             }
        )
       }
       FetchFitnessNews()
    },[])
    //console.log(posts)
  return (
    <Container>
        <h2>DailyPosts</h2>
        <Row>
           {posts.map((item)=>{
               return(
                <Post
                key={item.id}
                 id={item.Title}
                 image = {item.image}
                 Author={item.Author}
                 Title={item.Title}
                 Description={item.Description}
                 Publisher={item.Publisher}
                 link={item.link}
                 TimePublished={item.TimePublished}
                />
               )
           })}
        </Row>
    </Container>
  )
}

export default Posts
let Container = styled.div`
padding:40px;
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
 width:100%;
 max-width:100vw;
 overflow-y:hidden;
 overflow-x:scroll;
 margin:2% 0;
 @media(max-width:600px){
    overflow-y:hidden;
 }
 ::-webkit-scrollbar{
     height:3px;
     background-color:#333;
     border-radius:8px;
 }
 ::-webkit-scrollbar-thumb{
     height:3px;
     background-color:#f44336;
     border-radius:8px;
 }
 ::-webkit-scrollbar-track{
     height:3px;
     background-color:#333;
     border-radius:8px;
 }
`