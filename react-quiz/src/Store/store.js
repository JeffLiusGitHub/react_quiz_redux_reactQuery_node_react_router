import { configureStore } from '@reduxjs/toolkit';
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import cartReducer from './CartSlice';
import userReducer from './UserSlice';
import wishListReducer from './WishListSlice';

const persistConfig = {
	key: 'user',
	version: 1,
	storage,
};
const cartPersistConfig = {
	key: 'cart',
	version: 1,
	storage,
};
const wishListPersistConfig = {
	key: 'wishlist',
	version: 1,
	storage,
};
const cartPersistedReducer = persistReducer(cartPersistConfig, cartReducer);

const persistedReducer = persistReducer(persistConfig, userReducer);

const wishListpersistedReducer = persistReducer(
	wishListPersistConfig,
	wishListReducer
);

export const store = configureStore({
	reducer: {
		cart: cartPersistedReducer,
		user: persistedReducer,
		wishList: wishListpersistedReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export let persistor = persistStore(store);