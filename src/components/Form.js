import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";

function Form({ onAddData }){
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = ("0" + (currentDate.getMonth() + 1)).slice(-2);
    const now = ("0" + currentDate.getDate()).slice(-2);
    const defaultDate = `${year}-${month}-${now}`;

    const [formData, setFormData] = useState({
        date: defaultDate,
        description: "",
        category: "",
        amount: "",
    });

    

    function handleSubmit(event){
        event.preventDefault();
        const data = {
            date: formData.date,
            description: formData.description,
            category: formData.category,
            amount: formData.amount, 
        }
        console.log(data);
        fetch("http://localhost:3000/transactions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(response => response.json()
            // onAddData({...data, id:response.id});
        ).then(data => onAddData({...data}));
    }

    function handleChange(event){
        const key = event.target.name;
        setFormData(
            {
                ...formData,
                [key]: event.target.value,
            }
        )
    }
    
return (
    <form className="form-input" onSubmit={handleSubmit}>
        <label htmlFor="date">Date: 
            <input name="date" id="date" type="date" onChange={handleChange} value={formData.date} />
        </label>
        <input name="description" type="text" placeholder="Description" onChange={handleChange} value={formData.description} />
        <input name="category" type="text" placeholder="Category" onChange={handleChange} value={formData.category} />
        <input name="amount" type="text" placeholder="Amount" onChange={handleChange} value={formData.amount} />
        <input type="submit" value="Add Transaction" />
    </form>
)
}

export default Form