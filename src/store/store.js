import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// REDUX PERSIST TO STOR DATA IN LOCAL STORAGE
const persistConfig = {
	// persist everything
	key: "root",
	storage: storage,
	// things not to persist - auth conflict
	blacklist: ["user"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [process.env.MODE_ENV === "development" && logger].filter(
	Boolean
);

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(
	persistedReducer,
	undefined,
	composedEnhancers
);

export const persistor = persistStore(store);
