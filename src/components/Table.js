import React from "react";
import TableRow from "./TableRow"

function Table({ data }){
    const dataList = data.map(data => {
        return <TableRow key={data.id} date={data.date} description={data.description} category={data.category} amount={data.amount}/>
    })
    return (
        <div className="div-table">
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {dataList}
                </tbody>
            </table>
        </div>
    )
}

export default Table