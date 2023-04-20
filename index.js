//console.log("OK");
/*
This is the first day of redux basic class

REDUX is a third party librery which is used to manage and store the states (data)or it can be used in Viewjs, Reactjs, Next.js, Angular.js etc.

so once you have learned about redux you can use this third party librery for state managemnt in any of the js framework. Ok got it ?

or Redux is basically the combination of useContext Hook and  useReducer Hook.
if you dont know this hooks :-

useContext is the Hook function in Reactjs, which is used to share the states(data)  globaly from the top level element of the project to the deep nested component. or this is basically  the solution of prop driilling problem in which  we used to move the data(states) from each  component. but with the help of provider we can now easily share and get the states in the deep nested component. ok ?

useReducer:- the useReducer is the another hook function of reactjs which accepts the oldstate and actions and return the newstate.



Bsic elements of Redux
1. Actions {"type":"Value must be CAPITAL LATTERS"}
2. ActionCreators
3. reducerFunction
4. StoreObject

# Actions are a js object which must have a type property, and may have payload.
# ActionCreators are some js functions which returns actions
# ReducerFunction are some js functions
# StoreObject is js object which is passed at the top level of the application Component (means in the App.js)



useContext+useReducer= Redux
 */
const redux = require("redux");

//const createStore = require("redux").createStore;
//console.log("createStore----->", createStore);

const { legacy_createStore } = require("redux");

console.log("createStore--->", legacy_createStore);

const ADD = "ADDBY1";
const SUB = "SUBTRACTBY1";
let AddBy1 = () => {
    return {
        type: ADD,
        payload: {
            value: 1,
        },
    };
};

let SubBy1 = () => {
    return {
        type: SUB,
        payload: {
            value: 1,
        },
    };
};

let oldState = {
    value: 0,
};

const rootReducer = (state = oldState, action) => {
    let newState = state;
    switch (action.type) {
        case ADD:
            return {
                ...newState,
                value: newState.value + action.payload.value,
            };
            break;
        case SUB:
            return {
                ...newState,
                value: newState.value - action.payload.value,
            };
            break;
        default:
    }

    return newState;
};

let storeObject = legacy_createStore(rootReducer);

console.log("storeObject ------>", storeObject);

console.log("currentState before dispatch --->", storeObject.getState());

console.log("currentState --->", storeObject.dispatch(AddBy1()));
console.log("currentState --->", storeObject.dispatch(AddBy1()));
console.log("currentState --->", storeObject.dispatch(AddBy1()));
console.log("currentState --->", storeObject.dispatch(AddBy1()));
console.log("currentState --->", storeObject.dispatch(AddBy1()));

console.log("currentState --->", storeObject.dispatch(SubBy1()));
console.log("currentState after dispatch --->", storeObject.getState());
