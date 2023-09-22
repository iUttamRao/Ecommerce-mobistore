import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ecomReducer from "./reducer/ecomReducer";
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from "redux-persist";

const persistConfig ={
    key:'root',
    storage,
}

const rootReducer = combineReducers({
    ecom : ecomReducer,
})

const persistedReducer = persistReducer(persistConfig,rootReducer);

const store = configureStore({
    reducer:persistedReducer,
    middleware:(getDefaultMiddleware) => [
        ...getDefaultMiddleware({
            serializableCheck:false
        }),
    ]
});

const persistor = persistStore(store)

// const store = configureStore({
//     reducer:{
//         ecom:ecomReducer,
//     }
// })

export {store, persistor};