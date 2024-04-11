import React from "react"
import "./Card.css"

function Card (props) {
    return (
      <>
        <div className ="div1">
          <h2>{props.title}</h2>
          <p> {props.description}</p>
          <p> Price $ {props.price}</p>

        </div>


      </>


    )
}

export default Card