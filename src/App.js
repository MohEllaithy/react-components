import { useState } from "react";
import Dropdown from "./components/Dropdown";

const options = [
    {label: 'Red', value: 'red'},
    {label: 'Green', value: 'green'},
    {label: 'Blue', value: 'blue'},
    {label: 'Yellow', value: 'yellow'},
    {label: 'Brown', value: 'brown'}
];

function App(){

    const [selection, setSelection] = useState(null);

    const handleSelection = option => setSelection(option);

    return (<Dropdown options={options} value={selection} onChange={handleSelection} />);
}

export default App;