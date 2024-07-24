import React from "react";
import "./ListItem.css"
import ModalEdit from "../ModalEdit/ModalEdit";

export default function ListItem(props) {

    const modalId = `modalEdit-${props.id}`;
    return (
        <div className="card">
            <img className="card-img-top" src={props.imgUrl} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">Count: {props.count}</p>
                <p className="card-text">Weight: {props.weight}g</p>
                <div className="btns-container">
                    <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#${modalId}`}>Edit</button>
                    <button className="btn btn-danger" onClick={() => props.removeProduct(props.id)}>Remove</button>
                </div>
            </div>
            <ModalEdit itemId={props.id} change={props.change} submit={props.submit} formData={props.formData} id={modalId} imgUrl={props.imgUrl} name={props.name} count={props.count} weight={props.weight}/>
        </div>
    )
}