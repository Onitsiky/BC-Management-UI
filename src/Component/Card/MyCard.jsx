import React from "react";

const MyCard = ({title, value, date}) => {
    let today = new Date().toLocaleDateString();
    return(
        <div class="card col-lg-2 m-2">
            <div class="card-body">
                <p class="card-text">{date} : {today}</p>
                <p class="card-text">{title} : {value}</p>
            </div>
        </div>            
    )
}
export default MyCard;