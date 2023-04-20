//console.log("OK");
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
