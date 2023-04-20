import { Fragment } from "react";

function Table({data, config, keyFn}){
    const renderedRows = data.map(row => {
        const renderdCells = config.map(cell => {
            return (
                <td className="p-2" key={cell.label}>{cell.render(row)}</td>
            );
        });

        return (
            <tr className="border-b" key={keyFn(row)}>{renderdCells}</tr>
        );
    }
    );

    const renderedHeaders = config.map(column => {
            if(column.header) return <Fragment key={column.label}>{column.header()}</Fragment>;
            return <th key={column.label}>{column.label}</th>
        });

    return(
        <table className="table-auto border-spacing-2">
            <thead>
                <tr className="border-b-2">{renderedHeaders}</tr>
            </thead>
            <tbody>{renderedRows}</tbody>
        </table>
    );
}

export default Table;