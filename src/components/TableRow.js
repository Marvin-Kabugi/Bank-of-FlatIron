import React from "react";


function TableRow({ date, description, category, amount }){
    return(
        <tr className="rows">
            <td>{date}</td>
            <td>{description}</td>
            <td>{category}</td>
            <td>{amount}</td>
        </tr>
    )
}

export default TableRow