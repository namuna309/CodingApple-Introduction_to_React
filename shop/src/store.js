import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
    name: 'user',
    initialState: {name: 'kim', age: 20},
    reducers: {
        changeName(state) {
            state.name = 'park';
        },
        changeAge(state, n){
            state.age += n.payload;
        }
    }
})

export let { changeName, changeAge } = user.actions;

let stock = createSlice({
    name: 'stock',
    initialState:[10, 11, 12]
}) 

let cart = createSlice({
    name: 'cart',
    initialState: [
        {id : 0, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1}
      ],
    reducers: {
        countUp(state, i) {
            state.map((s) => {
                if (s.id == i.payload) {
                    s.count += 1;
                }
            })
        },
        addData(state, data) {
            let is_changed = true
            state.map((s) => {
                if (s.id == data.payload.id) {
                    s.count += 1;
                    is_changed = false
                }
            })
            if (is_changed) {
                state.push(data.payload);
            }
            
        }
    }
})

export let {countUp, addData} = cart.actions;

export default configureStore({
  reducer: {
        user: user.reducer,
        stock: stock.reducer,
        cart: cart.reducer
   }
}) 