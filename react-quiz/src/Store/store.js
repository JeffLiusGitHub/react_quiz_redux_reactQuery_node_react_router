import { configureStore } from '@reduxjs/toolkit';
import userReducer from './UserSlice';
export default configureStore({
	reducer: {
		user: userReducer,
		// board: boardReducer,
		// info: infoReducer,
	},
});

// import { configureStore } from '@reduxjs/toolkit';
// import {
// 	persistStore,
// 	persistReducer,
// 	FLUSH,
// 	REHYDRATE,
// 	PAUSE,
// 	PERSIST,
// 	PURGE,
// 	REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// import userReducer from './UserSlice';

// const persistConfig = {
// 	key: 'user',
// 	version: 1,
// 	storage,
// };

// const persistedReducer = persistReducer(persistConfig, userReducer);

// export const store = configureStore({
// 	reducer: {

// 		user: persistedReducer,

// 	},
// 	middleware: (getDefaultMiddleware) =>
// 		getDefaultMiddleware({
// 			serializableCheck: {
// 				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
// 			},
// 		}),
// });

// export let persistor = persistStore(store);
