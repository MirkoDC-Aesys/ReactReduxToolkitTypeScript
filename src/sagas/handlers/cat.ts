import { call, put } from "redux-saga/effects"
import { AxiosResponse } from 'axios'
import { getCatSagaFulfilled, getCatLoading, getCatRejected } from '../../features/cat/catSlice'
import { getCat } from '../../api/cat'

export function* handleGetCat() {
    try {
        yield put(getCatLoading())
        const response: AxiosResponse = yield call(getCat)
        const url = response.data[0].url
        yield put(getCatSagaFulfilled(url))
    } catch (error) {
        console.log(error)
        yield put(getCatRejected())
    }
}