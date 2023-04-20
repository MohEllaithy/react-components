import useCounter from '../hooks/useCounter';
import Button from '../components/Button';

function Counter({initialValue}){

    const {count, increment} = useCounter(initialValue);
    
    return(
        <div>
            <p>Count is {count}</p>
            <Button onClick={increment} primary>Increase</Button>
        </div>
    );
}

export default Counter;
