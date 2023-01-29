import { createSlice } from '@reduxjs/toolkit'

var retrievedUser = localStorage.getItem('userObject');
console.log(retrievedUser)
if (retrievedUser !== "undefined") {
    retrievedUser = JSON.parse(retrievedUser);
}
//console.log('retrievedObject: ', JSON.parse(retrievedUser));

export const userSlice = createSlice({

    name: 'user',
    initialState: {
        retrievedUser
    },
    reducers: {
        createUser: (state, action) => {

            console.log(action);
            localStorage.setItem('userObject', JSON.stringify(action.payload));
            console.log(state.user);
        },
        logoutUser: (state, action) => {
            if (action.payload) {
                localStorage.removeItem('userObject', undefined);
            }
            console.log(action);
        }
    },
})

export const { increment, decrement, incrementByAmount, createUser, logoutUser } = userSlice.actions

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const incrementAsync = (amount) => (dispatch) => {
    setTimeout(() => {
        dispatch(incrementByAmount(amount))
    }, 1000)
}

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectUser = (state) => state.user.retrievedUser

export default userSlice.reducer
