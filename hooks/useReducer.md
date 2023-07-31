**# useReducer #**



structure:      const [state, dispatch] = useReducer(functionHere, initialTarget);
//      state: state of "initialTarget"
//      dispatch: a method to give reducer function type of action
//      functionHere: the function to change state
//      initialTarget: normal variables



function reducer(state, action) {
    // action: type of action ('increment'/'decrement')
    // state: state of "initialState"


    switch (action.type) {
        case 'increment':
            return {count: state.count + 1};
        case 'decrement':
            return {count: state.count - 1};
        default: throw new Error();
    }
}
    // reducer function



const initialState = {count: 0};
    // initial variable

const [state, dispatch] = useReducer(reducer, initialState);
    // initialize useReducer



return (
    <>
        Count: {state.count}
        <button onClick={() => dispatch({type: 'decrement'})}>-</button>
        <button onClick={() => dispatch({type: 'increment'})}>+</button>
            // dispatch giving action type to function ('decrement'/'increment')
    </>
);