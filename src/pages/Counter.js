import { useReducer } from 'react';
import { produce } from 'immer';
import Button from '../components/Button';
import Panel from '../components/Panel';

const INCREMENT_COUNT = 'increment-count';
const DECREMENT_COUNT = 'decrement-count';
const VALUE_To_ADD = 'value-to-add';
const ADD_VALUE_TO_COUNT = 'add-value-to-count';

const reducer = (state, action) => {

    switch(action.type){
        case INCREMENT_COUNT:
            state.count = state.count + 1;
            return;

        case DECREMENT_COUNT: 
            state.count = state.count - 1;
            return;

        case VALUE_To_ADD:
            state.valueToAdd = action.payload;
            return;

        case ADD_VALUE_TO_COUNT:
            state.count = state.count + state.valueToAdd;
            state.valueToAdd = 0;
            return;
    
        default:
            return;     
    }

};

function Counter({initialValue}){

    const [state, dispatch] = useReducer(produce(reducer, {
        count: initialValue,
        valueToAdd: 0
    }));

    const increment = () => dispatch({type: INCREMENT_COUNT});

    const decrement = () => dispatch({type: DECREMENT_COUNT});

    const handleChange = e => {
        const value = parseInt(e.target.value) || 0;
        dispatch({
            type: VALUE_To_ADD,
            payload: value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({
            type: ADD_VALUE_TO_COUNT
        });
    }
    
    return(
        <Panel className='m-3'>
            <h1 className='text-lg'>Count is {state.count}</h1>
            <div className='flex flex-row'>
                <Button onClick={increment}>Increase</Button>
                <Button onClick={decrement}>Decrease</Button>
            </div>    
            <form onSubmit={handleSubmit}>
                <label>Add a lot!</label>
                <input 
                value={state.valueToAdd || ''} 
                onChange={handleChange} 
                type='number' 
                className='p-1 m-3 bg-gray-50 border-gray-300'
                />
                <Button>Add it</Button>
            </form>
        </Panel>
    );
}

export default Counter;
