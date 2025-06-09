import React, { useReducer } from "react";

interface State {
    count: number;
}

type CounterAction =
    | { type: "reset" }
    | { type: "setCount"; value: State["count"] };

const initialState: State = { count: 0 };

function stateReducer(state: State, action: CounterAction): State {
    switch (action.type) {
        case "reset":
            return initialState;
        case "setCount":
            return { ...state, count: action.value };
        default:
            throw new Error("Unknown action");
    }
}

export default function Records() {
    const [state, dispatch] = useReducer(stateReducer, initialState);

    const addFive = () => dispatch({ type: "setCount", value: state.count + 5 });
    const reset = () => dispatch({ type: "reset" });

    return (
        <div>
            <h1>Test</h1>
            <div className="bird-face">
                <div className="pupil"></div>
                <div className="face-upper"></div>
                <div className="face-lower"></div>
                <div className="beak"></div>
            </div>
            <p>Count: {state.count}</p>
            <button onClick={addFive}>Add 5</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}
