import React from "react";
import "./ListItem.css"

export default function ListItem(props) {
    return (
        <div className="card">
            <img className="card-img-top" src="https://cdn.mos.cms.futurecdn.net/iC7HBvohbJqExqvbKcV3pP-1200-80.jpg" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Potato</h5>
                    <p className="card-text">Count: {props.count}</p>
                    <p className="card-text">Weight: {props.weight}g</p>
                    <a href="#" className="btn btn-primary">Edit</a>
                </div>
        </div>
    )
}