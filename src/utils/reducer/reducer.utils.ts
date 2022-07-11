// helper function, return action object
// AnyAction type Action<T= any> {type: T} extraProps:string
// extend AnyAction to the project purpose 
import { AnyAction } from "redux";

// Type guards 
// extends action creator functions with an ability to match an received action by the type of ac 
// attach method to createAction 
// type predicate - function checks if argument that it recives is a narrow/more specific type - narrow down type of variables 
// type intersections - joining of two types Type 1 & Type 2 
// return type - ReturnType<functionToCheckType>

// Matchable type is an extension of action creation 
type Matchable<AC extends () => AnyAction> = AC & {
	type: ReturnType<AC>["type"];
	match(action: AnyAction): action is ReturnType<AC>;
};

// function creates machable type on base of action creator 
export function withMatcher<AC extends () => AnyAction & { type: string }>(
	actionCreator: AC
): Matchable<AC>;

export function withMatcher<
	AC extends (...arg: any[]) => AnyAction & { type: string }
>(actionCreator: AC): Matchable<AC>;

// extract type of action AC to match actions and create actions
// takes ac function and adds additional functionality 
export function withMatcher(actionCreator: Function) {
	const type = actionCreator().type;
	return Object.assign(actionCreator, {
		type,
		match(action: AnyAction) {
			return action.type === type;
		},
	});
}


// function overloading - multiple function type definitions of the same name
// different parameters types
// 1. ACTIONS TYPES 
// action with payload 
export type ActionWithPayload<T, P> = {
	type: T;
	payload: P;
};
// action without payload 
export type Action<T> = {
	type: T;
};
// 2. FUNCTIONS DEFINITIONS that returns actions with/without payload 
export function createAction<T extends string, P>(
	type: T,
	payload: P
): ActionWithPayload<T, P>;
// type definition
export function createAction<T extends string>(
	type: T,
	payload: void
): Action<T>;

// 3. FUNCTION 
export function createAction<T extends string, P>(type: T, payload: P) {
	return { type, payload };
}
// WITHOUT TYPESCRIPT 
// export const createAction = (type, payload) => ({ type, payload });
