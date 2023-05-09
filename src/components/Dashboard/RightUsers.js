import React from 'react'
import styled from 'styled-components'
import Products from './Products'

function RightUsers() {
  return (
    <Container>
       <h2>Top Selling Products</h2>
        <Products
         img={'/Images/BenchPress.png'}
         desc={'Bench Press'}
         price={45000}
        />
        <Products
        img={'/Images/Matrix Power Drive.png'}
        desc={'Matrix Power Drive'}
        price={112000}
        />
        <Products
         img={'/Images/NikeShoe.png'}
         desc={'Nike Shorts'}
         price={4000}
        />
        <Products
         img={'/Images/OrangeBra.png'}
         desc={'Orange Bra'}
         price={1000}
        />
        <Products
         img={'/Images/ChestWorkout Machine.png'}
         desc={'Chest Workout Machine'}
         price={76000}
        />
    </Container>
  )
}

export default RightUsers
let Container = styled.div`
 border-radius:10px;
 box-shadow:3px 3px 5px #333;
 background-color:#fff;
 padding:10px;
 flex-basis:35%;
`