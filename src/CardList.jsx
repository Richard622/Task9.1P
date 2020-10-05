import React from "react"
import Card from "./Card"
import "./Card.css"
import staffList from "./staffList"

function CardList(){
    return(
        <div className="row">
            {staffList.map((staff)=>
            <Card 
            key = {staff.key}
            avatar = {staff.avatar}
            name = {staff.name}
            position = {staff.position}
             /> )}
        </div>
    )
}

export default CardList