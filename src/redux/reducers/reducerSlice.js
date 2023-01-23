import { createSlice } from "@reduxjs/toolkit";


export const gymReducer = createSlice({
    name:'gym',
    initialState:{
      testimonials:[

      ],
      userDetails:{

      },
      DetailsName:{
          
      },
      EcommerceStore:[

      ],
      PurchasedItems:{

      },
      StarRating:{
          
      },
      StorePricingPlan:{

      },
      PurchaseDetails:{

      },
       WorkoutType:{

       },
       ExerciseSchedule:{

       },
        visibility:false,
        showBookings:false,
        TotalTime:0,
        TimeStart:{

        },
        StoreExerciseHistory:[

        ],
        ExercisesIcons:{

        },
        TimeFinished:{

        },
        TotalResults:{

        },
        BookingsMade:[

        ],
        TrainerDetails:{

        },
        ReminderStorage:[

        ],
        DaysSelected:[

        ],
        Userprofile:{

        },
        DaysCount:null,
        TrainerProfileStore:{

        },
        PurchasedPlan:{

        }
    },
    reducers:{
        addPost:(state,action)=>{
            return{
                ...state,
                testimonials:[...state.testimonials,action.payload]
            }
        },
        storeUserDetails:(state,action)=>{
            return{
                ...state,
                userDetails:action.payload
            }
        },
        userNameStore:(state,action)=>{
            return{
                ...state,
                DetailsName:action.payload
            }
        },
        AddItems:(state,action)=>{
            return{
                ...state,
                EcommerceStore:[...state.EcommerceStore,action.payload]
            }
        },
        setStarRating:(state,action)=>{
            return{
                ...state,
                StarRating:action.payload
            }
        },
        DeleteItemFromCart:(state,action)=>{
            const index = state.EcommerceStore.findIndex((itemIndex)=>itemIndex.id === action.payload)
            console.log(index)
            let newBasket = [...state.EcommerceStore];
            if(index<0){
                newBasket.splice(index,1)
            }
            else{
                console.warn(`You cannot delete item in position ${index}`)
            }
            return{
                ...state,
                EcommerceStore:newBasket
            }
        },
        AddPurchasedItems:(state,action)=>{
            return{
                ...state,
                PurchasedItems:action.payload
            }
        },
        SetPricingPlan:(state,action)=>{
            return{
                ...state,
                StorePricingPlan:action.payload
            }
        },
        SetPurchaseDetails:(state,action)=>{
            return{
                ...state,
                PurchaseDetails:action.payload
            }
        },
        SetWorkoutDetails:(state,action)=>{
            return{
                ...state,
                WorkoutType:action.payload
            }
        },
        setVisibility:(state,action)=>{
            return{
                ...state,
                visibility:action.payload
            }
        },
        setExerciseGifs:(state,action)=>{
            return {
                ...state,
                ExerciseSchedule:action.payload
            }
        },
        SetTotalTime:(state,action)=>{
            return{
                ...state,
                TotalTime:action.payload
            }
        },
        SetTimeStart:(state,action)=>{
            return{
                ...state,
                TimeStart:action.payload
            }
        },
        SetTimeFinished:(state,action)=>{
            return{
                ...state,
                TimeFinished:action.payload
            }
        },
        SetExerciseHistory:(state,action)=>{
            return{
                ...state,
                StoreExerciseHistory:[...state.StoreExerciseHistory,action.payload]
            }
        },
        SetExerciseIcons:(state,action)=>{
            return{
                ...state,
                ExercisesIcons:action.payload
            }
        },
        SetTotalResults:(state,action)=>{
            return{
                ...state,
                TotalResults:action.payload
            }
        },
        SetBookings:(state,action)=>{
            return{
                ...state,
                BookingsMade:[...state.BookingsMade,action.payload]
            }
        },
        SetShowBookings:(state,action)=>{
            return{
                ...state,
                showBookings:action.payload
            }
        },
        SetTrainerDetails:(state,action)=>{
            return{
                ...state,
                TrainerDetails:action.payload
            }
        },
        setReminderDetails:(state,action)=>{
            return{
                ...state,
                ReminderStorage:[...state.ReminderStorage,action.payload]
            }
        },
        setDaysSelected:(state,action)=>{
            return{
                ...state,
                DaysSelected:[...state.DaysSelected,action.payload]
            }
        },
         SetProfile:(state,action)=>{
            return{
                ...state,
                Userprofile:action.payload
            }
         },
         SetDaysCount:(state,action)=>{
            return{
                ...state,
                DaysCount:action.payload
            }
         },
         setTrainerProfileDetails:(state,action)=>{
            return{
                ...state,
                TrainerProfileStore:action.payload
            }
         },
         setPurchasedPlan:(state,action)=>{
            return{
                ...state,
                PurchasedPlan:action.payload
            }
         }
    }
})

export const {
    addPost,
    storeUserDetails,
    userNameStore,
    AddItems,
    setStarRating,
    DeleteItemFromCart,
    AddPurchasedItems,
    SetPricingPlan,
    SetPurchaseDetails,
    SetWorkoutDetails,
    setVisibility,
    setButtonNumber,
    setExerciseGifs,
    SetTotalTime,
    SetExerciseHistory,
    SetExerciseIcons,
    SetTimeStart,
    SetTimeFinished,
    SetTotalResults,
    SetBookings,
    SetShowBookings,
    SetTrainerDetails,
    setReminderDetails,
    setDaysSelected,
    SetProfile,
    SetDaysCount,
    setTrainerProfileDetails,
    setPurchasedPlan
    } = gymReducer.actions
export default gymReducer.reducer