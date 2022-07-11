import { compose, createStore, applyMiddleware, Middleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
import { persistStore, persistReducer, PersistConfig } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { MiddlewareArray } from "@reduxjs/toolkit";

export type RootState = ReturnType<typeof rootReducer>;

// REDUX PERSIST TO STORE DATA IN LOCAL STORAGE
// configuration object
type ExtendedPersistConfig = PersistConfig<RootState> & {
	blacklist: (keyof RootState)[];
};

const persistConfig: ExtendedPersistConfig = {
	// persist everything, root level
	key: "root",
	storage: storage,
	// things not to persist - auth conflict
	// user reducer - no need to keep in local storage
	blacklist: ["user"],
};
// create reducer on top of rootReducer to use in Store
const persistedReducer = persistReducer(persistConfig, rootReducer);

// library helper - runs just before actions hits reducers
// logger - shows what an action is and how state changes
const middleWares = [process.env.MODE_ENV === "development" && logger].filter(
	(middleware): middleware is Middleware => Boolean(middleware)
);
// call middleware / pass middlewares
const composedEnhancers = compose(applyMiddleware(...middleWares));

// CREATE A STORE (rootReducer(mandatory), additions, enhancers(middleWares) )
export const store = createStore(
	persistedReducer,
	undefined,
	composedEnhancers
);

export const persistor = persistStore(store);
