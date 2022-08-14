import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import UserLogin from './components/LoginSection/UserLogin';
import React, { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { userNameStore } from './redux/reducers/reducerSlice';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shopping from './components/EcommerceCart/Shopping';
import CheckoutCart from './components/EcommerceCart/CheckoutCart';
import PaypalPayment from './components/EcommerceCart/PaypalPayment';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import Pricing from './components/Pricing/Pricing';
import PricingPayment from './components/Pricing/PricingPayment';
import Virtualworkout from './components/VirtualWorkout/Virtualworkout';
import ExercisePreview from './components/VirtualWorkout/ExercisePreview';
import TrainerbookingSection from './components/TrainerbookingSection';
import Joinus from './components/JoinUsSection/Joinus';
import ScrollToTop from './components/ScrollToTop';

function App() {
  let dispatch = useDispatch()
  let auth = getAuth()
  let[user,setUser] = React.useState(null)

  useEffect(()=>{
      onAuthStateChanged(auth,(AuthUser)=>{
        if(AuthUser){
          setUser(AuthUser)
          console.log(AuthUser)
          console.log('You are Logged in!!!')
           dispatch(userNameStore({
             UserName:AuthUser.displayName,
             Email:AuthUser.email
           }))
          // localStorage.setItem('Username',AuthUser.displayName)
        }
        else{
          setUser(null)
          console.log('You are Logged out!!!')
        }
      })
  },[user])
  let Options = {
    "client-id":"AXlh9wwCU-jQ3qLmNO7EIz15HAmw-w1r8aLyWLpMzjgskOBTZHVweztDrhBhZbqMz_7NPu01KOZ2eZvQ",
  }
  return (
    <PayPalScriptProvider options={Options}>
    <div className="App">
      {user?
      <BrowserRouter>
       <Header/>
        <Routes>
          <Route path='/joinus' element={<Joinus/>}></Route>
          <Route path='/booking' element={<TrainerbookingSection/>}></Route>
          <Route path='/virtualworkout' element={<Virtualworkout/>}></Route>
          <Route path='/pricingpayment' element={<PricingPayment/>}></Route>
          <Route path='/pricing' element={<Pricing/>}></Route>
          <Route path='/payment' element={<PaypalPayment/>}></Route>
          <Route path='/checkout' element={<CheckoutCart/>}></Route>
          <Route path='/shopping' element={<Shopping/>}></Route>
          <Route path='/' element={<Home/>}></Route>
        </Routes>
        <ScrollToTop/>
        <Footer/>
      </BrowserRouter>:
      <UserLogin/>}
    </div>
    </PayPalScriptProvider>
  );
}

export default App;
