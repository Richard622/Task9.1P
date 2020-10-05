import React from "react"



function Card2(props){
    return(
        <div className={"smallone"}>
            <img src = {props.avatar} alt = "staff" />
            <h3>{props.name}</h3>
            <p>{props.position}</p>
        </div>
        
    )
}

export default Card2