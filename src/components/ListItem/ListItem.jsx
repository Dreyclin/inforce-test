import React from "react";
import "./ListItem.css"

export default function ListItem(props) {
    return (
        <div className="card">
            <img className="card-img-top" src={props.imgUrl} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">Count: {props.count}</p>
                <p className="card-text">Weight: {props.weight}g</p>
                <div className="btns-container">
                    <button className="btn btn-primary">Edit</button>
                    <button className="btn btn-danger">Remove</button>
                </div>
            </div>
        </div>
    )
}