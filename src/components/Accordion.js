import { useState } from "react";
import { GoChevronRight, GoChevronDown } from "react-icons/go";

function Accordion({items}){

    const [expandedIndex, setExpandedIndex] = useState(-1);

    const handleClick = nextIndex => {
        setExpandedIndex(currentExpandedIndex => {
            if (currentExpandedIndex === nextIndex) return -1;
            return nextIndex;
        });
    }

    const renderedItems = items.map((item, index) => {

        const isExpanded = expandedIndex === index;

        return (
            <div key={item.id}>
                <div className="flex justify-between p-3 bg-gray-50 border-b item-center cursor-pointer" onClick={()=>handleClick(index)}>
                    {item.label}
                    <span className="text-2xl">{isExpanded ? <GoChevronRight /> : <GoChevronDown />}</span>
                    </div>
                {isExpanded && <div className="boder-b p-5">{item.content}</div>}
            </div>
        );
    });

    return (
        <div className="border-x border-t rounded">
            {renderedItems}
        </div>
    );
}

export default Accordion;