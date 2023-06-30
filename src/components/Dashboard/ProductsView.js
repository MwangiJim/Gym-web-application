import React from 'react'
import styled from 'styled-components'
import ProductsComponent from './ProductsComponent'

const ProductsView = () => {
  return (
    <Container>
            <div className='left__top'>
              <h1>PRODUCTS</h1>
              <p>See list of Products in stock</p>
              </div>
             <div className='products'>
             <BoxRow>
                 <ProductsComponent
                   category={'machine'}
                   name={'Erbessd Balancing Machine'}
                   rating={1}
                   price={9000}
                   description={'A Chest Workout Machine'}
                 />
                 <ProductsComponent
                   category={'machine'}
                   name={'BenchPress For Lifting Weights'}
                   rating={5}
                   price={45000}
                   description={'Workout bench to use to lift weights'}
                 />
                 <ProductsComponent
                   category={'machine'}
                   name={'Weight Holder'}
                   rating={2}
                   price={130000}
                   description={'Machine to hold weights easily'}
                 />
                 <ProductsComponent
                   category={'machine'}
                   name={'Dumbell'}
                   rating={1}
                   price={5000}
                   description={'5kg Dumbell for Arm and Shoulder Workout'}
                 />
              </BoxRow>
              <BoxRow>
                 <ProductsComponent
                   category={'machine'}
                   name={'5kg Dumbell for Arm and Shoulder Workout'}
                   rating={4}
                   price={15500}
                   description={'Upgrade version of original dumbells'}
                 />
                 <ProductsComponent
                   category={'clothing'}
                   name={'Exercise Mat For Workouts'}
                   rating={5}
                   price={2800}
                   description={'Great Mat for workout routines at Home'}
                 />
                 <ProductsComponent
                   category={'machine'}
                   name={'Elliptical Trainer'}
                   rating={3}
                   price={100000}
                   description={'TRainer best to stretch your quads and glutes'}
                 />
                 <ProductsComponent
                   category={'machine'}
                   name={'Functions Trainer'}
                   rating={4}
                   price={99000}
                   description={'Machine to build dense Muscle'}
                 />
              </BoxRow>
              <BoxRow>
                 <ProductsComponent
                   category={'machine'}
                   name={'Indoor Rower'}
                   rating={2}
                   price={50000}
                   description={'Arm muscle Workout Machine'}
                 />
                 <ProductsComponent
                   category={'machine'}
                   name={'M5 FITNESS Machine'}
                   rating={3}
                   price={105000}
                   description={'Cycling Machine to stay Fit'}
                 />
                 <ProductsComponent
                   category={'machine'}
                   name={'Inspire Cycling Machine'}
                   rating={5}
                   price={91000}
                   description={'Inspire Machine for great stamina and health'}
                 />
                 <ProductsComponent
                   category={'machine'}
                   name={'KettleBell'}
                   rating={2}
                   price={7500}
                   description={'Bells for better Arm Control'}
                 />
              </BoxRow>
              <BoxRow>
                 <ProductsComponent
                   category={'clothing'}
                   name={'Exercise Bra For Women'}
                   rating={3}
                   price={1000}
                   description={'Orange Bra for Workout for Women'}
                 />
                 <ProductsComponent
                   category={'machine'}
                   name={'Matrix Power Drive'}
                   rating={4}
                   price={112000}
                   description={'Treadmill to loose weight quisker'}
                 />
                 <ProductsComponent
                   category={'shoes'}
                   name={'Nike Shoes For Training'}
                   rating={1}
                   price={3500}
                   description={'Feet Comfort,Extra sole to product from scars'}
                 />
                 <ProductsComponent
                   category={'machine'}
                   name={'Free Motion Epic Shoulder Press'}
                   rating={3}
                   price={135000}
                   description={'Shoulder Workout Machine'}
                 />
              </BoxRow>
              <BoxRow>
                 <ProductsComponent
                  category={'machine'}
                  name={'Shoulder Training Exercise Machine'}
                  price={145000}
                  rating={2}
                  description={'KEBS verified shoulder press machine'}
                 />
                 <ProductsComponent
                  category={'clothes'}
                  name={'Nike Shorts'}
                  price={300}
                  rating={4}
                  description={'Cotton shorts made in China'}
                 />
                 <ProductsComponent
                  category={'clothing'}
                  name={'ThunderBra Lightweight For Women'}
                  price={1300}
                  rating={3}
                  description={'Orange Thi=underBra for Workouts'}
                 />
                 <ProductsComponent
                  category={'machine'}
                  name={'Proform Cycling Machine'}
                  price={89000}
                  rating={4}
                  description={'Cycle machine with distance travel display'}
                 />
              </BoxRow>
              <BoxRow>
                 <ProductsComponent
                  category={'shoes'}
                  name={'Rubber Shoes For Gentle Feet'}
                  price={900}
                  rating={5}
                  description={'Original Rockstar Shoes'}
                 />
                 <ProductsComponent
                  category={'shoes'}
                  name={'Nike Shoes For Running'}
                  price={1300}
                  rating={5}
                  description={'Klaxcar Original Make for Nike Shoes'}
                 />
                 <ProductsComponent
                  category={'clothing'}
                  name={'Blue Shorts'}
                  price={350}
                  rating={3}
                  description={'Nike shorts for training and sportswear'}
                 />
                 <ProductsComponent
                  category={'shoes'}
                  name={'Sneakers'}
                  price={2500}
                  rating={3}
                  description={'Sneakers for jogging and running sessions'}
                 />
              </BoxRow>
              <BoxRow>
                 <ProductsComponent
                  category={'clothing'}
                  name={'Green Track Suit'}
                  price={800}
                  rating={2}
                  description={'Track suit for jogging'}
                 />
                 <ProductsComponent
                  category={'clothing'}
                  name={'Black Striped TrackSuit'}
                  price={750}
                  rating={3}
                  description={'Black training track suit for wear'}
                 />
                 <ProductsComponent
                  category={'machine'}
                  name={'Epilliptic Training Machine'}
                  price={65000}
                  rating={2}
                  description={'Well greased and oiled epilliptic machine to train legs'}
                 />
                 <ProductsComponent
                  category={'machine'}
                  name={'CYBEX Treadmill'}
                  price={130000}
                  rating={1}
                  description={'Advanced model treadmill'}
                 />
              </BoxRow>
             </div>
    </Container>
  )
}

export default ProductsView
let Container = styled.div`
 flex-basis:83%;
 padding:5px;
 .left__top{
  text-align:left;
  color:#fff;
  margin:20px 0;
  p{
    color:gray;
    font-size:13px;
  }
}
.products{
  height:96vh;
  max-height:96vh;
  overflow-y:scroll;
}
`
let BoxRow = styled.div`
 display:flex;
 justify-content:space-between;
 align-items:center;
 margin:1% 0;
`