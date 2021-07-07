import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CatState {
    value: string;
}

const initialState: CatState = {
    value: ''
}

const catSlice = createSlice({
    name: 'cat',
    initialState,
    reducers: {
        getCatSaga: (state) => {
            return state
        },
        getCatLoading: (state) => {
            state.value = 'https://media1.tenor.com/images/8f7a28e62f8242b264c8a39ba8bea261/tenor.gif?itemid=15922897'
        },
        getCatSagaFulfilled: (state, action) => {
            state.value = action.payload
        },
        getCatRejected: (state) => {
            state.value = 'https://i.ytimg.com/vi/KuLFXr7OPpc/hqdefault.jpg'
        }
    }
})

export const { getCatSaga, getCatSagaFulfilled, getCatLoading, getCatRejected } = catSlice.actions
export default catSlice.reducer