import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {customAPIv1} from "../customAPI";
import {fetchFlights} from "../flight/flightSlice";

const initialState = {
    departure: {
        flight: {},
        seats: []
    },
    return: {
        flight: {},
        seats: []
    }
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
// export const setDepartureSeats = createAsyncThunk(
//     'seat/setDepartureSeats',
//     async (arg, thunkAPI) => {
//         console.log("arg:", arg)
//         // The value we return becomes the `fulfilled` action payload
//         return null;
//     }
// );
export const seatSlice = createSlice({
    name: 'seat',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        increment: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        setDepartureSeats: (state, action) => {
            console.log("setDepartureSeats:", action.payload);
            state.departure.flight = action.payload.flight;
            state.departure.seats = action.payload.seats;
        }
    },
    // The `extraReducers` field lets the slice handle actions defined elsewhere,
    // including actions generated by createAsyncThunk or in other slices.
    extraReducers: (builder) => {
        // builder
        //     .addCase(setDepartureSeats.fulfilled, (state, action) => {
        //         console.log("set seats success:", action.payload)
        //     })
    },
});

export const {increment, decrement, setDepartureSeats} = seatSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectDepartureSeats = (state) => state.seat.departure;
export const selectReturnSeats = (state) => state.seat.return;
const seatReducer = seatSlice.reducer
export default seatReducer;
