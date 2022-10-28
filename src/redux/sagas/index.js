import { all } from 'redux-saga/effects';
import requestPayProduct from './ShoppingProduct';

export default function* rootSaga(){
    yield all([
        requestPayProduct()
        
    ])
}