import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import currentWeatherSliceReducer from './slices/currentWeatherClise'

const rootReducer = combineReducers({
    currentWeatherSliceReducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        })
})

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = typeof store
export type AppDispath = AppStore['dispatch']
