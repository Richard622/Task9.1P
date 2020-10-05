import React from "react"
import Card2 from "./Card copy"
import "./Card.css"
import staffList from "./staffList copy.js"

function CardList2(){
    return(
        <div className="row">
            {staffList.map((staff)=>
            <Card2
            key = {staff.key}
            avatar = {staff.avatar}
            name = {staff.name}
            position = {staff.position}
             /> )}
        </div>
    )
}

export default CardList2