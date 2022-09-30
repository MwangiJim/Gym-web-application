import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Aboutus from './Aboutus'
import Features from './Features'
import Footer from './Footer'
import Planning from './Planning'
import Posts from './Posts'
import Slider from './Slider'
import Testimonials from './Testimonials'
import Trainers from './Trainers'

function Home() {
   let{testimonials} = useSelector((state)=>state.gymRegucer)
  return (
     <Container>
        <Slider/>
        <Aboutus/>
        <Features/>
        <Planning/>
        <Trainers/>
        <Testimonials/>
        <Posts/>
     </Container>
  )
}

export default Home
let Container = styled.div`

`