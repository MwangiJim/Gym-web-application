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
import { createContext } from 'react';
export const userDetailsContext = createContext();

function App() {
  let [user,setuser] = React.useState(null)
  let loggedIn = window.localStorage.getItem("isLoggedIn");
  useEffect(()=>{
    fetch('http://localhost:8080/userDetails',{
       method:'POST',
       headers:{'Content-Type':'application/json'},
       body:JSON.stringify({
          token:window.localStorage.getItem('token')
       })
    })
    .then((res)=>res.json())
    .then((data)=>{
       console.log('User Logged in',data);
       setuser(data);
    })
 },[])
  let Options = {
    "client-id":"AXlh9wwCU-jQ3qLmNO7EIz15HAmw-w1r8aLyWLpMzjgskOBTZHVweztDrhBhZbqMz_7NPu01KOZ2eZvQ",
  }
  console.log('Details',user)
  return (
   <userDetailsContext.Provider value={user}>
     <PayPalScriptProvider options={Options}>
    <div className="App">
      {loggedIn?
      <BrowserRouter>
       <Header/>
        <Routes>
          <Route path = '/accountsetup' element ={<UserLogin/>}></Route>
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
   </userDetailsContext.Provider>
  );
}

export default App;
