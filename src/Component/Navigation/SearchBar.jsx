import React from "react";

const SearchBar = ({label}) => {
    return(
        <div className="row col-8">
            <div className="col-5 mb-3">
                <input type="search" className="form-control" placeholder={label}/>
            </div>
            <div className="col-3 " >
                <button className="btn btn-secondary">Rechercher</button>
            </div>
        </div>
    )
}
export default SearchBar