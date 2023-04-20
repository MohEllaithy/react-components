import { GoArrowSmallDown, GoArrowSmallUp } from 'react-icons/go';
import Table from "./Table";
import useSort from '../hooks/useSort';

function SortableTable(props){

    const {config, data} = props;

    const {sortBy, sortOrder, sortedData, setSortColumn} = useSort(config, data);

    const updatedConfig = config.map(column => {
        if(!column.sortValue) return column;
        return {
            ...column,
            header: () => <th className="cursor-pointer hover:bg-gray-100" onClick={() => setSortColumn(column.label)}>
                    <div className="flex item-center">
                        {getIcons(column.label, sortBy, sortOrder)}
                        {column.label}
                    </div>    
                </th>
        };
    });

    return <Table {...props} data={sortedData} config={updatedConfig} />;
}

function getIcons(label, sortBy, sortOrder){
    if(label !== sortBy) return <div><GoArrowSmallUp /><GoArrowSmallDown /></div>;
    if(sortOrder === null) return <div><GoArrowSmallUp /><GoArrowSmallDown /></div>;
    if(sortOrder === 'asc')  return <GoArrowSmallUp />;
    if(sortOrder === 'desc')  return <GoArrowSmallDown />;
}

export default SortableTable;