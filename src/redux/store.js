import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/filterSlice' //cюда импортируется export default counterSlice.reducer


export const store = configureStore({
  reducer: {
      counter: counterReducer,
  },
});


//console.log("counterReducer",counterReducer) // ƒ (state, action) {return _reducer(state, action);}

//console.log("configureStore", configureStore) //configureStore(options) {var curriedGetDefaultMiddleware = curryGetDefaultMiddleware();}
//console.log("store", store) //{liftedStore: {…}, dispatch: ƒ, subscribe: ƒ, getState: ƒ, replaceReducer: ƒ, …}

/*
@@observable: ƒ ()
dispatch: ƒ dispatch()
getState: ƒ i()
liftedStore: {dispatch: ƒ, subscribe: ƒ, getState: ƒ, replaceReducer: ƒ, @@observable: ƒ}
replaceReducer: ƒ replaceReducer(r)
subscribe: ƒ subscribe(listener)
*/
