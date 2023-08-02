import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

const myStore = configureStore({
    reducer: {
        counter: counterReducer, //the key name here defines the state key i.e. state.counter
    }
})
// the counterReducer function is in charge of deciding if and how to update the state.counter
// whenever an action is dispatched.
export const store = myStore;
