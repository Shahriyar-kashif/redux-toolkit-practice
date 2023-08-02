import {createSlice} from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name:"counter",
    initialState:{
        value:0,
    },
    reducers:{
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
        increment: state => {state.value += 1}, //here we are updating the state by mutating it but
        // it doesnt matter in redux-toolkit as explained in above comments.
        decrement: state => {state.value -= 1},
        incrementByAmount: (state, action) => {state.value += action.payload},
    }
})

export const {increment, decrement, incrementByAmount} = counterSlice.actions; //the slice we created
//has an actions property that returns action creators with the same name as the methods we passed in
// the reducer
export const counterSelector = state => state.counter.value;

export default counterSlice.reducer; // the reducer object of the slice created has the reducer logic
// that we implemented
