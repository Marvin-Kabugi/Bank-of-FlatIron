import React from "react";
import Pic from "../icons8-search-24.png"

function Search({ search, onChangeSearch }){
    // handle change of input value
    function handleChange(event){
        onChangeSearch(event.target.value)
    }
    return (
        <>
            <div className="input-container">
                <input type="text" placeholder={"Search our Recent Transctions"} className="search-input" onChange={handleChange} value={search}> 
                    
                    </input>
                    <button className="image-button">
                    <img src={Pic} alt="Button" />
                    </button>   
                </div>   
        </>
        
    )
}

export default Search